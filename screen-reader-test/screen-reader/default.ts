/* eslint-disable import/no-anonymous-default-export */
import {
  NVDAPlaywright,
  nvdaTest,
  VoiceOverPlaywright,
  voiceOverTest,
} from "@guidepup/playwright";
import { macOSRecord, windowsRecord } from "@guidepup/guidepup";
import {
  expect,
  Page,
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
  TestType,
} from "@playwright/test";

import { platform } from "os";

export type ScreenReaderTestType = TestType<
  PlaywrightTestArgs &
    PlaywrightTestOptions & {
      nvda?: NVDAPlaywright;
      voiceOver?: VoiceOverPlaywright;
    },
  PlaywrightWorkerArgs & PlaywrightWorkerOptions
>;

export const generateSnapshot = async (
  screenReader: VoiceOverPlaywright | NVDAPlaywright,
  shiftFirst?: boolean,
) => {
  if (!screenReader) return;

  const phraseLog: string[] = await screenReader.spokenPhraseLog();
  if (shiftFirst) {
    phraseLog.shift();
  }

  expect(JSON.stringify(phraseLog)).toMatchSnapshot();
};

export const runTest = async (
  title: string,
  page: Page,
  screenReader: VoiceOverPlaywright | NVDAPlaywright,
  url: string,
  testFn: (screenReader: VoiceOverPlaywright | NVDAPlaywright) => Promise<void>,
  postTestFn: (
    screenReader: VoiceOverPlaywright | NVDAPlaywright,
  ) => Promise<void> = async (nvda: any) => generateSnapshot(nvda),
  additionalParams = "&color=neutral-bg-lvl-1&density=regular",
) => {
  await page.goto(`${url}${additionalParams}`, {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(500);

  let recorder: (() => void) | undefined;

  if (process.env.CI) {
    const path = `./${process.env.showcase}/test-results/${title}-${Date.now()}.mp4`;
    if (platform() === "win32") {
      recorder = windowsRecord(path);
    } else {
      recorder = macOSRecord(path);
    }
  }

  await screenReader.navigateToWebContent();
  await testFn(screenReader);
  await postTestFn(screenReader);
  recorder?.();
};

export const testDefault = (
  test: ScreenReaderTestType,
  title: string,
  url: string,
  testFn: (screenReader: VoiceOverPlaywright | NVDAPlaywright) => Promise<void>,
  postTestFn: (
    screenReader: VoiceOverPlaywright | NVDAPlaywright,
  ) => Promise<void> = async (nvda: any) => await generateSnapshot(nvda),
  additionalParams = "&color=neutral-bg-lvl-1&density=regular",
) => {
  const os = platform();
  if (os === "win32") {
    test(title, async ({ page, nvda }) => {
      await runTest(
        title,
        page,
        nvda,
        url,
        testFn,
        postTestFn,
        additionalParams,
      );
    });
  } else {
    test(title, async ({ page, voiceOver }) => {
      await runTest(
        title,
        page,
        voiceOver,
        url,
        testFn,
        postTestFn,
        additionalParams,
      );
    });
  }
};

export const getTest = (): ScreenReaderTestType => {
  const os = platform();
  return os === "win32" ? nvdaTest : voiceOverTest;
};

export default { testDefault, generateSnapshot, getTest };

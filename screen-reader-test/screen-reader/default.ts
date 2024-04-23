/* eslint-disable import/no-anonymous-default-export */

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
import { NVDAPlaywright, VoiceOverPlaywright } from "@guidepup/playwright";

import { platform } from "os";

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
    const path = `./test-results/${title}-${Date.now()}.mp4`;
    console.log("Start recorder", path);
    if (platform() === "win32") {
      recorder = windowsRecord(path);
    } else {
      recorder = macOSRecord(path);
    }
  }

  await screenReader.navigateToWebContent();
  console.log("screenReader did: navigateToWebContent");
  await testFn(screenReader);
  console.log("screenReader did: testFn");
  await postTestFn(screenReader);
  console.log("screenReader did: postTestFn");
  recorder?.();
  console.log("Stop recorder");
};

export const testDefault = (
  test: TestType<
    PlaywrightTestArgs &
      PlaywrightTestOptions & {
        nvda?: NVDAPlaywright;
        voiceOver?: VoiceOverPlaywright;
      },
    PlaywrightWorkerArgs & PlaywrightWorkerOptions
  >,
  title: string,
  url: string,
  testFn: (screenReader: VoiceOverPlaywright | NVDAPlaywright) => Promise<void>,
  postTestFn: (
    screenReader: VoiceOverPlaywright | NVDAPlaywright,
  ) => Promise<void> = async (nvda: any) => await generateSnapshot(nvda),
  additionalParams = "&color=neutral-bg-lvl-1&density=regular",
) => {
  const os = platform();
  console.log("Running test for", os);
  if (os === "win32") {
    test(title, async ({ page, nvda }) => {
      console.log("Running test", title);
      await runTest(
        title,
        page,
        nvda,
        url,
        testFn,
        postTestFn,
        additionalParams,
      );
      console.log("Running test", title, "done");
    });
  } else {
    test(title, async ({ page, voiceOver }) => {
      console.log("Running test", title);
      await runTest(
        title,
        page,
        voiceOver,
        url,
        testFn,
        postTestFn,
        additionalParams,
      );
      console.log("Running test", title, "done");
    });
  }
};

export default { testDefault, generateSnapshot };

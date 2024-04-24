/* eslint-disable import/no-anonymous-default-export */
import {
  NVDAPlaywright,
  nvdaTest,
  VoiceOverPlaywright,
  voiceOverTest,
} from "@guidepup/playwright";
import { macOSRecord, windowsRecord } from "@guidepup/guidepup";
import { expect, Page } from "@playwright/test";

import { platform } from "os";
import { DefaultTestType, RunTestType, ScreenReaderTestType } from "./data";

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

export const runTest = async ({
  title,
  url,
  testFn,
  postTestFn,
  additionalParams,
  page,
  nvda,
  voiceOver,
}: DefaultTestType & RunTestType) => {
  await page.goto(`${url}${additionalParams}`, {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(500);

  let recorder: (() => void) | undefined;

  if (process.env.CI) {
    const path = `./${
      process.env.showcase
    }/test-results/${title}-${Date.now()}.mp4`;
    if (isWin()) {
      recorder = windowsRecord(path);
    } else {
      recorder = macOSRecord(path);
    }
  }

  await (nvda ?? voiceOver).navigateToWebContent();
  await testFn(voiceOver, nvda);
  await postTestFn(voiceOver, nvda);
  recorder?.();
};

export const testDefault = ({
  test,
  title,
  url,
  testFn,
  postTestFn = async (voiceOver, nvda) => {
    await generateSnapshot(voiceOver ?? nvda);
  },
  additionalParams = "&color=neutral-bg-lvl-1&density=regular",
}: DefaultTestType) => {
  if (isWin()) {
    test(title, async ({ page, nvda }) => {
      await runTest({
        title,
        page,
        nvda,
        url,
        testFn,
        postTestFn,
        additionalParams,
      });
    });
  } else {
    test(title, async ({ page, voiceOver }) => {
      await runTest({
        title,
        page,
        voiceOver,
        url,
        testFn,
        postTestFn,
        additionalParams,
      });
    });
  }
};

const isWin = (): boolean => platform() === "win32";

export const getTest = (): ScreenReaderTestType =>
  isWin() ? nvdaTest : voiceOverTest;

export default { testDefault, generateSnapshot, getTest };

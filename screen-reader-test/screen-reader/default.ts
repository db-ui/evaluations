/* eslint-disable import/no-anonymous-default-export */
import {
  NVDAPlaywright,
  nvdaTest,
  VoiceOverPlaywright,
  voiceOverTest,
} from "@guidepup/playwright";
import { macOSRecord, windowsRecord } from "@guidepup/guidepup";
import { expect } from "@playwright/test";

import { platform } from "os";
import { DefaultTestType, RunTestType, ScreenReaderTestType } from "./data";

const translations: Record<string, string[]> = {
  button: ["Schalter"],
  edit: ["Eingabefeld"],
  "radio button": ["Auswahlschalter"],
  blank: ["Leer"],
  checked: ["aktiviert"],
  " of ": [" von "],
};

const cleanSpeakInstructions = (phraseLog: string[]): string[] =>
  phraseLog.map((phrase) =>
    phrase
      .split(". ")
      .filter(
        (sPhrase) =>
          !(
            sPhrase.startsWith("You are currently") ||
            sPhrase.startsWith("To enter") ||
            sPhrase.startsWith("To exit") ||
            sPhrase.startsWith("To click") ||
            sPhrase.startsWith("To select")
          ),
      )
      .join(". "),
  );

export const generateSnapshot = async (
  screenReader: VoiceOverPlaywright | NVDAPlaywright,
  shiftFirst?: boolean,
) => {
  if (!screenReader) return;

  let phraseLog: string[] = await screenReader.spokenPhraseLog();
  if (shiftFirst) {
    phraseLog.shift();
  }

  phraseLog = cleanSpeakInstructions(phraseLog);

  let snapshot = JSON.stringify(phraseLog);

  Object.entries(translations).map(([key, values]) => {
    values.forEach((value) => {
      snapshot = snapshot.replaceAll(value, key);
    });
  });

  expect(snapshot).toMatchSnapshot();
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
  retry,
}: DefaultTestType & RunTestType) => {
  await page.goto(`${url}${additionalParams}`, {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(500);

  let recorder: (() => void) | undefined;

  if (process.env.CI && retry > 0) {
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
    test(title, async ({ page, nvda }, testInfo) => {
      await runTest({
        title,
        page,
        nvda,
        url,
        testFn,
        postTestFn,
        additionalParams,
        retry: testInfo.retry,
      });
    });
  } else {
    test(title, async ({ page, voiceOver }, testInfo) => {
      await runTest({
        title,
        page,
        voiceOver,
        url,
        testFn,
        postTestFn,
        additionalParams,
        retry: testInfo.retry,
      });
    });
  }
};

const isWin = (): boolean => platform() === "win32";

export const getTest = (): ScreenReaderTestType =>
  isWin() ? nvdaTest : voiceOverTest;

export default { testDefault, generateSnapshot, getTest };

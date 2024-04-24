import {
  Page,
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
  TestType,
} from "@playwright/test";
import { NVDAPlaywright, VoiceOverPlaywright } from "@guidepup/playwright";

export type ScreenReaderTestType = TestType<
  PlaywrightTestArgs &
    PlaywrightTestOptions & {
      nvda?: NVDAPlaywright;
      voiceOver?: VoiceOverPlaywright;
    },
  PlaywrightWorkerArgs & PlaywrightWorkerOptions
>;

export type DefaultTestType = {
  test?: ScreenReaderTestType;
  title: string;
  url: string;
  testFn: (
    voiceOver: VoiceOverPlaywright,
    nvda: NVDAPlaywright,
  ) => Promise<void>;
  postTestFn?: (
    voiceOver: VoiceOverPlaywright,
    nvda: NVDAPlaywright,
  ) => Promise<void>;
  additionalParams?: string;
};

export type RunTestType = {
  page: Page;
  retry: number;
  nvda?: NVDAPlaywright;
  voiceOver?: VoiceOverPlaywright;
};

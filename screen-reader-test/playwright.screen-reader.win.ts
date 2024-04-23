import { devices, type PlaywrightTestConfig } from "@playwright/test";
import {screenReaderConfig} from "@guidepup/playwright";
import showcaseConfig from "./playwright.showcase";

const config: PlaywrightTestConfig = {
  ...screenReaderConfig,
  ...showcaseConfig,
  reportSlowTests: null,
  testDir: "./screen-reader/tests",
  snapshotDir: "./screen-reader/__snapshots__",
  timeout: 3 * 60 * 1000,
  snapshotPathTemplate:
    "{snapshotDir}/{testFileDir}/windows/{projectName}/{arg}/{testName}{ext}",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], headless: false },
    },
  ],
};

export default config;

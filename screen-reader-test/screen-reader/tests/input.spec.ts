import { nvdaTest as test } from "@guidepup/playwright";
import { testDefault, generateSnapshot } from "../default";

test.describe("DBInput", () => {
  testDefault(
    test,
    "should have message and label",
    "./#/03/input?page=variant helper message",
    async (screenReader) => {
      await screenReader.press("Tab");
      await screenReader.press("Shift+Tab");
      await screenReader.press("Tab");
    },
    async (screenReader) => await generateSnapshot(screenReader, true),
  );
});

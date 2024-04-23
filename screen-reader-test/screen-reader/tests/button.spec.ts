import { nvdaTest as test } from "@guidepup/playwright";
import { generateSnapshot, testDefault } from "../default";

test.skip("DBButton", () => {
  testDefault(
    test,
    "should not have icon in screen reader",
    "./#/02/button?page=content",
    async (screenReader) => {
      await screenReader.press("Tab");
      await screenReader.press("Shift+Tab");
      await screenReader.press("Tab");
      await screenReader.press("Tab");
    },
    async (screenReader) => await generateSnapshot(screenReader, true),
  );
});

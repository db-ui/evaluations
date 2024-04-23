import { nvdaTest as test } from "@guidepup/playwright";
import { testDefault } from "../default";

test.skip("DBRadio", () => {
  testDefault(
    test,
    "should label duplicated",
    "./#/03/radio?page=density",
    async (screenReader) => {
      await screenReader.press("ArrowLeft");
      await screenReader.press("ArrowRight");
      await screenReader.press("ArrowRight");
    },
  );
});

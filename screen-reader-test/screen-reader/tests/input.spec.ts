import { generateSnapshot, getTest, testDefault } from "../default";

const test = getTest();
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

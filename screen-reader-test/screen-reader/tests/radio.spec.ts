import { getTest, testDefault } from "../default";

const test = getTest();
test.describe("DBRadio", () => {
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

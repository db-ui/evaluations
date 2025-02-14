import { generateSnapshot, getTest, testDefault } from "../default";

const test = getTest();
test.describe("DBRadio", () => {
  testDefault({
    test,
    title: "should label duplicated",
    url: "./#/03/radio?page=density",
    testFn: async (voiceOver, nvda) => {
      const screenReader = voiceOver ?? nvda;
      await screenReader.next();
      await screenReader.previous();
      await screenReader.next();
      await screenReader.next();
    },
  });
});

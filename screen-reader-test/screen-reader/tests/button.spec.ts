import { generateSnapshot, getTest, testDefault } from "../default";

const test = getTest();

test.describe("DBButton", () => {
  testDefault({
    test,
    title: "should not have icon in screen reader",
    url: "./#/02/button?page=content",
    testFn: async (voiceOver, nvda) => {
      const screenReader = voiceOver ?? nvda;
      await screenReader.next();
      await screenReader.previous();
      await screenReader.next();
      await screenReader.next();
    },
    postTestFn: async (voiceOver, nvda) =>
      await generateSnapshot(voiceOver ?? nvda, true),
  });
});

import { generateSnapshot, getTest, testDefault } from "../default";

const test = getTest();
test.describe("DBInput", () => {
  testDefault({
    test,
    title: "should have message and label",
    url: "./#/03/input?page=variant helper message",
    testFn: async (voiceOver, nvda) => {
      const screenReader = voiceOver ?? nvda;
      await screenReader.next();
      await screenReader.previous();
      await screenReader.next();
    },
    postTestFn: async (voiceOver, nvda) =>
      await generateSnapshot(voiceOver ?? nvda, true),
  });
});

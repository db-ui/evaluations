import { generateSnapshot, getTest, testDefault } from "../default";

const test = getTest();
test.describe("DBInput", () => {
  testDefault({
    test,
    title: "should have message and label",
    url: "./#/03/input?page=variant helper message",
    testFn: async (voiceOver, nvda) => {
      if (voiceOver) {
        await voiceOver.next();
        await voiceOver.previous();
        await voiceOver.next();
      } else {
        await nvda.press("Tab");
        await nvda.press("Shift+Tab");
        await nvda.press("Tab");
      }
    },
    postTestFn: async (voiceOver, nvda) =>
      await generateSnapshot(voiceOver ?? nvda, true),
  });
});

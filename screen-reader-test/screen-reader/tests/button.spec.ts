import { generateSnapshot, getTest, testDefault } from "../default";

const test = getTest();

test.describe("DBButton", () => {
  testDefault({
    test,
    title: "should not have icon in screen reader",
    url: "./#/02/button?page=content",
    testFn: async (voiceOver, nvda) => {
      if (voiceOver) {
      } else {
        await nvda.press("Tab");
        await nvda.press("Shift+Tab");
        await nvda.press("Tab");
        await nvda.press("Tab");
      }
    },
    postTestFn: async (voiceOver, nvda) =>
      await generateSnapshot(voiceOver ?? nvda, true),
  });
});

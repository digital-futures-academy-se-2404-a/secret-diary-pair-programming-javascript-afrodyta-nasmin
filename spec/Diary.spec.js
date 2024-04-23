import Diary from "../src/Diary.js";

describe("Diary class tests", () => {
  describe("Diary Initialization Tests: ", () => {
    it("should create a new instance of the Diary class", () => {
      // Arrange
      // Act
      const testDiary = new Diary();
      // Assert
      // assertTrue(testWallet instanceof Wallet);
      expect(testDiary).toBeInstanceOf(Diary);
    });
  });

  describe("Adding entry to Diary Tests: ", () => {
    let testDiary, testEntry;
    // Will replace REPEATED arrange code
    beforeEach(() => {
      testDiary = new Diary();
      testEntry = jasmine.createSpyObj("testEntry", {
        getEntry: "Test Entry",
      });
    });

    afterEach(() => {
      testDiary = undefined;
      testEntry = undefined;
    });

    it("should add a new Entry to the DiaryEntry array", () => {
      // Arrange
      const expected = testDiary.getDiaryEntry().length + 1;
      // Act
      testDiary.addEntry(testEntry);
      // Assert

      expect(testDiary.getDiaryEntry().length).toBe(expected);
    });
  });
});

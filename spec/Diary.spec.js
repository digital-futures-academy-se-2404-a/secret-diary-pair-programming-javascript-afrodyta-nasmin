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
  ///////////////////////////////////////////////////////////////////////////////////////////
  describe("Adding entry to Diary Tests: ", () => {
    let testDiary, testEntry;
    // Will replace REPEATED arrange code
    beforeEach(() => {
      testDiary = new Diary();
      testEntry = jasmine.createSpyObj("testEntry", {
        getEntry: "Test Entry",
        getMessage: "TEST MESSAGE",
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

  describe("Reading an entry from Diary Tests: ", () => {
    let testDiary, testEntry;
    // Will replace REPEATED arrange code
    beforeEach(() => {
      testDiary = new Diary();
      testEntry = jasmine.createSpyObj("testEntry", {
        getEntry: "Test Entry",
        getMessage: "TEST MESSAGE",
      });
    });

    afterEach(() => {
      testDiary = undefined;
      testEntry = undefined;
    });

    it("should find the diary entry", () => {
      //Arrange
      const expected = true;
      //Act
      testDiary.addEntry(testEntry);
      let actual = testDiary.findEntry(testEntry);
      console.log(actual);
      //Assert

      expect(actual).toBe(expected);
    });

    it("should show an existing Entry from the DiaryEntry array", () => {
      // Arrange
      // testEntry = "TEST MESSAGE";
      const expected = "TEST MESSAGE";
      // Act
      let actual = testDiary.readEntry(testEntry);
      // Assert
      expect(actual).toBe(expected);
    });
  });
});

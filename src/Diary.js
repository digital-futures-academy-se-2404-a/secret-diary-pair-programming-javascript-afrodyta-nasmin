export default class Diary {
  #diaryEntry = [];

  //constructor

  //behaviors

  getDiaryEntry = () => {
    return this.#diaryEntry;
  };

  addEntry = (entry) => {
    if (!entry?.getEntry) return;
    this.#diaryEntry.push(entry);

    console.log(`${entry.getEntry()} was added to the Diary`);
  };
  findEntry = (entry) => {
    return (
      this.#diaryEntry.findIndex((e) => e.getEntry() === entry.getEntry()) !==
      -1
    );
  };

  readEntry = (entry) => {
    if (this.findEntry(entry)) {
      this.#diaryEntry[
        this.#diaryEntry.findIndex((e) => e.getEntry() === entry.getEntry())
      ].getMessage();
    }
  };
}

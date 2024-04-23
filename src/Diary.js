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
}

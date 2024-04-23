export default class Entry {
  #entryID;

  constructor(entryID) {
    return (this.#entryID = entryID);
  }

  getEntry() {
    return this.#entryID;
  }
}

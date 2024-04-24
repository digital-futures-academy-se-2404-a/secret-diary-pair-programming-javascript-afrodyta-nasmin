export default class Entry {
  #entryID;
  #entryMessage;

  constructor(entryID, entryMessage) {
    this.#entryID = entryID;
    this.#entryMessage = entryMessage;
  }

  getEntry() {
    return this.#entryID;
  }
  getMessage() {
    return this.#entryMessage;
  }
}

import Uuid from './utils/Uuid.js';

export default class Todo {
  constructor(name, done = false) {
    this.uuid = Uuid();
    this.name = name;
    this.done = done;
  }
}

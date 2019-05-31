import Uuid from './utils/Uuid.js';

export default class Todo {
  constructor(name, done = false, uuid = Uuid()) {
    this.name = name;
    this.done = done;
    this.uuid = uuid;
  }

  isDone() {
    return this.done;
  }

  toggle() {
    this.done = !this.done;
  }
}

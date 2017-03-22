import Animal from "./Animal.js";

export default class Bilateral extends Animal {
  constructor ( name, body ) {
    super ( name, "bilateral");
    this._body = body;
  }

  get body() {
    return this._body;
  }

  set body(strVal) {
    if (typeof strVal !== "string") {
      throw new TypeError("LivingThing.body must be a boolean value");
    }
    this._body = strVal;
  }
}
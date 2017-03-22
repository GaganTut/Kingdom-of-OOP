import LivingThing from "./LivingThing";

export default class Eukaryota extends LivingThing {
  constructor ( name, uniCellular, asexual, mobile, heterotroph ) {
    super ( name, uniCellular, true, false, asexual, mobile );
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.heterotroph must be a boolean value");
    }
    this._heterotroph = booVal;
  }

  get autotroph() {
    return !this._heterotroph;
  }

  set autotroph(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.autotroph must be a boolean value");
    }
    this._heterotroph = !booVal;
  }
}
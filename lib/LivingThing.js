export default class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('LivingThing.name must be a string');
    }
    this._name = newName;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.uniCellular must be a boolean value");
    }
    this._uniCellular = booVal;
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.multiCellular must be a boolean value");
    }
    this._uniCellular = !booVal;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.eukaryote must be a boolean value");
    }
    this._trueNucleus = booVal;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.prokaryote must be a boolean value");
    }
    this._trueNucleus = !booVal;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.anaerobic must be a boolean value");
    }
    this._anaerobic = booVal;
  }

  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.aerobic must be a boolean value");
    }
    this._anaerobic = !booVal;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.asexual must be a boolean value");
    }
    this._asexual = booVal;
  }

  get sexual() {
    return !this._asexual;
  }

  set sexual(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.sexual must be a boolean value");
    }
    this._asexual = !booVal;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.mobile must be a boolean value");
    }
    this._mobile = booVal;
  }

  get immobile() {
    return !this._mobile;
  }

  set immobile(booVal) {
    if (typeof booVal !== "boolean") {
      throw new TypeError("LivingThing.immobile must be a boolean value");
    }
    this._mobile = !booVal;
  }
}
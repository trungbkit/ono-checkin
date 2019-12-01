class List {
  constructor(data) {
    this.array = data;
    this.hash = {};
    data.forEach((e) => {
      this.hash[e.id] = e;
    });
  }

  get(id) {
    return this.hash[id];
  }

  add(obj) {
    const { id } = obj;
    if (!this.hash[id]) {
      this.array.push(obj);
    } else {
      const index = this.array.findIndex(m => m.id === id);
      this.array[index] = obj;
    }
    this.hash[id] = obj;
  }

  remove(id) {
    delete this.hash[id];
    this.array = this.array.filter(e => e.id !== id);
  }

  map(fn) {
    return this.array.map(fn);
  }

  apply(fn) {
    const newData = this.array.map(e => fn(e));
    this.array = newData;
    newData.forEach((e) => {
      this.hash[e.id] = e;
    });
  }

  clone(fn) {
    const obj = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    obj.apply(fn);
    return obj;
  }

  sort(fn) {
    this.array.sort(fn);
  }
}

module.exports = List;

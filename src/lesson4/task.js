/*
  Write a function that creates custom set object. Function
  accepts single optional parameter (array) do define initial
  set content.
  Set should have add(), has(), delete(), forEach(), clear() methods
  and size property. Should not use es6 objects Set, WeakSet,
  but work in similar way. Set should preserve addition order
  in forEach() method.
  mySet = createSet(['a', 'b', 'c'])
*/

function MySet(arr) {
  this.values = [];
  arr.forEach(value => this.add(value));
}

MySet.prototype = {
  get size() {
    return this.values.length;
  }
};

MySet.prototype.add = function add(value) {
  if (!this.has(value)) {
    this.values.push(value);
  }

  return this;
};

MySet.prototype.has = function has(value) {
  return this.values.includes(value);
};

MySet.prototype.delete = function del(value) {
  const indexOfNaN = () =>
    this.values.findIndex(element => Object.is(NaN, element));

  const index =
    Number.isNaN(value) && indexOfNaN !== -1
      ? indexOfNaN
      : this.values.indexOf(value);

  if (index !== -1) {
    this.values.splice(index, 1);
    return true;
  }

  return false;
};

MySet.prototype.forEach = function forEach(callback, args = this) {
  args.values.forEach((value, index, array) => {
    callback(value, value, array);
  });
};

MySet.prototype.clear = function clear() {
  this.values = [];
};

export function createSet(arr = []) {
  return new MySet(arr);
}

/*
  Write a function that creates custom map object. Function
  accepts single optional parameter (array) do define initial
  map content.
  Map should have set(), get(), has(), delete(), forEach(), clear()
  methods and size property. Should not use es6 objects Map, WeakMap,
  but work in similar way. Map should preserve addition order
  in forEach() method.
  myMap = createMap([['a', 1], ['b', 2], ['c', 3]])
*/

function MyMap(arr) {
  this.entries = [];
  arr.forEach(element => this.set(...element));
}

MyMap.prototype = {
  get size() {
    return this.entries.length;
  }
};

MyMap.prototype.get = function add(key) {
  return this.entries.find(element => (Number.isNaN(key) && Number.isNaN(element[0])) || element[0] === key);
};

MyMap.prototype.has = function has(key) {
  return Boolean(this.get(key));
};

MyMap.prototype.set = function add(key, value) {
  if (!this.has(key)) {
    this.entries.push([key, value]);
  } else {
    const updatedEntry = this.get(key);
    updatedEntry[1] = value;
  }

  return this;
};

MyMap.prototype.delete = function del(key) {
  if (this.has(key)) {
    this.entries = this.entries.filter(element =>
      !((Number.isNaN(key) && Number.isNaN(element[0])) || element[0] === key));
    return true;
  }

  return false;
};

MyMap.prototype.forEach = function forEach(callback, args = this) {
  args.entries.forEach((element, index, array) => {
    const [key, value] = element;
    callback(value, key, array);
  });
};

MyMap.prototype.clear = function clear() {
  this.entries = [];
};

export function createMap(arr = []) {
  return new MyMap(arr);
}

export default {
  createSet,
  createMap
};

/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/
function sum(a, b) {
  if (arguments.length !== 2) {
    throw new Error('Wrong arguments number!');
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Wrong arguments type!');
  }

  return a + b;
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/
function sumAll(...args) {
  if (!args.length) {
    throw new Error('Wrong arguments number!');
  }

  if (args.some(x => typeof x !== 'number')) {
    throw new Error('Wrong arguments type!');
  }

  return args.reduce((a, b) => a + b, 0);
}

/*
  Напишите функцию, которая возвращает число x в степень n
*/
function pow(x, n) {
  if (arguments.length !== 2) {
    throw new Error('Wrong arguments number!');
  }

  if (typeof x !== 'number' || typeof n !== 'number') {
    throw new Error('Wrong arguments type!');
  }

  return x ** n;
}

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
function random(from, to) {
  if (arguments.length !== 2) {
    throw new Error('Wrong arguments number!');
  }

  if (typeof from !== 'number' || typeof to !== 'number') {
    throw new Error('Wrong arguments type!');
  }

  if (from > to) {
    throw new Error('Wrong arguments value!');
  }

  return Math.floor(Math.random() * ((to - from) + 1)) + from;
}

export default {
  sum,
  sumAll,
  pow,
  random,
};

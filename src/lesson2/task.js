/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/
//TODO: -- implementation of additional checks AND test cases is required!
export function sum(a, b) {
  return a + b;
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/
//TODO: -- implementation of additional checks AND test cases is required!
export function sumAll(...args) {
  return args.reduce((a, b) => a + b, 0);
}

/*
  Напишите функцию, которая возвращает число x в степень n
*/
//TODO: -- implementation of additional checks AND test cases is required!
export function pow(x, n) {
  return x ** n;
}

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
//TODO: -- implementation of additional checks AND test cases is required!
export function random(from, to) {
  return Math.floor(Math.random() * ((to - from) + 1)) + from;
}

export default {
  sum,
  sumAll,
  pow,
  random,
};

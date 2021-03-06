/*
  Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType(variable) {
  return typeof variable;
}

/*
  Напишите функцию, которая принимает 1 аргумент и возвращает:
  'primitive' если тип данных относится к примивным
  'primitive-special' если тип данных специальный
  'object' - если простой обьект
  'object-array' - если массив
  'object-function' - если функция
*/
function getDataTypePseudoName(variable) {
  const dataType = typeof variable;

  if ([null, undefined].includes(variable)) {
    return 'primitive-special';
  }

  switch (dataType) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'symbol':
      return 'primitive';
    case 'object':
      if (Array.isArray(variable)) {
        return 'object-array';
      }
      return 'object';
    case 'function':
      return 'object-function';
    default:
      throw new Error('Wrong data');
  }
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  и возврвщает 1 если их значения и их типы равны,
  0 если равны только значения
  и -1 в другом случае
*/
function compareByType(a, b) {
  if (a === b) {
    return 1;
  } else if (a == b) {
    return 0;
  }

  return -1;
}

// Numbers

/*
  Напишите функцию, которая принимает 1 аргумент,
  и в случае если аргумент имеет числовой тип увеличивает его на 1
  и возврвщвет результат,
  в любом другом случае возврвщвет -1
*/
function increase(value) {
  return Number.isFinite(value) ? value + 1 : -1;
}

/*
  Напишите функцию, которая принимает 1 аргумент(число),
  и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
function testForSafeNumber(value) {
  if (typeof value !== 'number') {
    throw new Error('Wrong argument type!');
  }
  return Number.isFinite(value) ? 'safe' : 'danger';
}

// Strings

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray(str) {
  return str.split(' ');
}

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
  return str.slice(0, str.indexOf(','));
}

/*
  Напишите функцию, которая принимает 2 аргумента (строку и симовл),
  и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
  false в противоположном случае
*/
function isSingleSymbolMatch(str, symbol) {
  if (
    str.indexOf(symbol) === str.lastIndexOf(symbol) &&
    str.indexOf(symbol) !== -1
  ) {
    return str.indexOf(symbol);
  }

  return false;
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  массив в разделитель[опционально],
  и возвращает строку ввиде элементов массива c разделителями если разделитель задан
  или строку разделенную '-' если не задан
*/
function join(array, separator) {
  return separator ? array.join(separator) : array.join('-');
}

/*
  Напишите функцию, которая принимает 2 массива,
  и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue(arrA, arrB) {
  return [...arrA, ...arrB];
}

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой массив отсортированный от большего к меньшему
*/
function order(arr) {
  const sortNumbers = (a, b) => b - a;

  if (arr.every(x => typeof x === 'number')) {
    return arr.sort(sortNumbers);
  }

  return arr.sort().reverse();
}

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой без чисел которые меньше 0
*/
function removeNegative(arr) {
  return arr.filter(value => value >= 0);
}

/*
  Напишите функцию, которая принимает 2 числовых массива,
  и возвращает новый массив, состоящий из элементов первого но без элементов
  которые присутствуют во втром
  [1,2,3], [1, 3] => [2]
*/
function without(arrA, arrB) {
  return arrA.filter(el => !arrB.includes(el));
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение математической операции с двумя
  операндами (поддерживаются 4 базовых оператора + - / *).
  Функция вычисляет выражение и возвращает число либо NaN.
  '12/6' => 2
*/
function calcExpression(expression) {
  const execExpression = (operandA, operation, operandB) => {
    switch (operation) {
      case '+':
        return Number(operandA) + Number(operandB);
      case '-':
        return operandA - operandB;
      case '/':
        return operandA / operandB;
      case '*':
        return operandA * operandB;
      default:
        throw new Error('Wrong expression');
    }
  };

  const template = /(-?\d+(\.\d+)?)\s*([+\-*/])\s*(-?\d+(\.\d+)?)/g;
  const result = template.exec(expression);
  return result ? execExpression(result[1], result[3], result[4]) : NaN;
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение логической операции с двумя
  операндами (поддерживаются 5 базовых операторов > < = >= <=).
  Функция вычисляет выражение и возвращает true / false,
  либо бросает exception в случае ошибки.
  '100>5' => true
*/
function calcComparison(expression) {
  const execExpression = (operandA, operation, operandB) => {
    if (Number.isNaN(operandA) || Number.isNaN(operandB)) {
      throw new Error('Wrong expression');
    }

    switch (operation) {
      case '>':
        return operandA > operandB;
      case '<':
        return operandA < operandB;
      case '=':
        return operandA === operandB;
      case '>=':
        return operandA >= operandB;
      case '<=':
        return operandA <= operandB;
      default:
        throw new Error('Wrong expression');
    }
  };

  const template = /(-?\d+(\.\d+)?)\s*(>=|<=|=|>|<)\s*(-?\d+(\.\d+)?)/g;
  const result = template.exec(expression);

  if (result) {
    return execExpression(Number(result[1]), result[3], Number(result[4]));
  }

  throw new Error('Wrong expression');
}

/*
  Напишите функцию, которая принимает обьект и строку,
  содержащую выражение доступа к свойствам обьекта.
  Функция возвращает значение запрашиваемого свойства либо
  бросает exception в случае ошибки.
  { a: { x: 2 }, b: 5 }, '.a.x' => 2
  { a: 1, b: 2 }, '.c' => exception
*/
function evalKey(obj, expression) {
  if (obj === null || typeof obj !== 'object' || typeof expression !== 'string') {
    throw new TypeError('Wrong arguments');
  }

  if (expression.startsWith('.')) {
    const result = expression
      .replace(/\s/g, '')
      .split('.')
      .slice(1)
      .reduce((accumulator, index) => accumulator && accumulator[index], obj);
    if (result === undefined) {
      throw new Error('Wrong expression');
    }
    return result;
  }
  throw new Error('Wrong expression');
}

export default {
  getDataType,
  getDataTypePseudoName,
  compareByType,
  increase,
  testForSafeNumber,
  stringToArray,
  getStringPart,
  isSingleSymbolMatch,
  join,
  glue,
  order,
  removeNegative,
  without,
  calcExpression,
  calcComparison,
  evalKey,
};

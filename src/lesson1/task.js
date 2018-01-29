/*
  Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
//TODO: -- implementation of additional checks is required!
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
//TODO: -- implementation of additional checks is required!
function getDataTypePseudoName(variable) {
  const dataType = typeof variable;

  switch (dataType) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'symbol':
      return 'primitive';
    case 'undefind':
      return 'primitive-special';
    case 'object':
      if (variable === null) {
        return 'primitive-special';
      } else if (Array.isArray(variable)) {
        return 'object-array';
      }
      return 'object';
    case 'function':
      return 'object-function';
    default:
      return undefined;
  }
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  и возврвщает 1 если их значения и их типы равны,
  0 если равны только значения
  и -1 в другом случае
*/
//TODO: -- implementation of additional checks is required!
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
//TODO: -- implementation of additional checks is required!
function increase(value) {
  return typeof value === 'number' ? value + 1 : -1;
}

/*
  Напишите функцию, которая принимает 1 аргумент(число),
  и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
//TODO: -- implementation of additional checks is required!
function testForSafeNumber(value) {
  return Number.isFinite(value) || !Number.isNaN(value) ? 'safe' : 'danger';
}

// Strings

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает массив из елементов строки разделенных по пробелу ' '
*/
//TODO: -- implementation of additional checks is required!
function stringToArray(str) {
  return str.split(' ');
}

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает часть этой строки до первой запятой
*/
//TODO: -- implementation of additional checks is required!
function getStringPart(str) {
  return str.slice(0, str.indexOf(','));
}

/*
  Напишите функцию, которая принимает 2 аргумента (строку и симовл),
  и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
  false в противоположном случае
*/
//TODO: -- implementation of additional checks is required!
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
//TODO: -- implementation of additional checks is required!
function join(array, separator) {
  return separator ? array.join(separator) : array.join('-');
}

/*
  Напишите функцию, которая принимает 2 массива,
  и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
//TODO: -- implementation of additional checks is required!
function glue(arrA, arrB) {
  return [...arrA, ...arrB];
}

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой массив отсортированный от большего к меньшему
*/
//TODO: -- implementation of additional checks is required!
function order(arr) {
  const sortNumbers = (a, b) => b - a;

  const sortLetters = (a, b) => {
    if (a < b) {
      return 1;
    }

    if (a > b) {
      return -1;
    }

    return 0;
  };

  if (!arr.some(isNaN)) {
    return arr.sort(sortNumbers);
  }

  return arr.sort(sortLetters);
}

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой без чисел которые меньше 0
*/
//TODO: -- implementation of additional checks is required!
function removeNegative(arr) {
  return arr.filter(value => value > 0);
}

/*
  Напишите функцию, которая принимает 2 числовых массива,
  и возвращает новый массив, состоящий из элементов первого но без элементов
  которые присутствуют во втром
  [1,2,3], [1, 3] => [2]
*/
//TODO: -- implementation of additional checks is required!
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
//TODO: -- implementation of additional checks is required!
function calcExpression(expression) {
  const execExpression = (operandA, operandB, operation) => {
    switch (operation) {
      case '+':
        return operandA + operandB;
      case '-':
        return operandA - operandB;
      case '/':
        return operandA / operandB;
      case '*':
        return operandA * operandB;
      default:
        return undefined;
    }
  };

  const parseExpression = () => {
    const allowedOpers = ['+', '-', '/', '*'];
    let result;

    allowedOpers.forEach((value, index) => {
      if (expression.includes(value)) {
        const operandA = expression.slice(0, index);
        const operandB = expression.slice(-index);
        result = execExpression(operandA, operandB, value);
      }

      return undefined;
    });

    if (Number.isFinite(result)) {
      return result;
    } else if (typeof result === 'number') {
      return Infinity;
    }

    return NaN;
  };

  return parseExpression();
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение логической операции с двумя
  операндами (поддерживаются 5 базовых операторов > < = >= <=).
  Функция вычисляет выражение и возвращает true / false,
  либо бросает exception в случае ошибки.
  '100>5' => true
*/
// FIXME: -- all test are passed with implementation based on iterators, but NEW implementation required with something less heavyweight !!!
function calcComparison(expression) {
  const execExpression = (operandA, operandB, operation) => {
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
        return false;
    }
  };

  const parseExpression = () => {
    const allowedOpers = ['>=', '<=', '=', '>', '<'];

    for (const value of allowedOpers) {
      if (expression.includes(value)) {
        const index = expression.indexOf(value);
        const operandA = Number(expression.slice(0, index));
        let operandB;
        if (value === '>=' || value === '<=') {
          operandB = Number(expression.slice(index + 2, expression.length));
        } else {
          operandB = Number(expression.slice(index + 1, expression.length));
        }
        if (Number.isNaN(operandA) || Number.isNaN(operandB)) {
          throw Error('Wrong params! Only numbers are required.');
        }
        return execExpression(operandA, operandB, value);
      }
    }
  };

  return parseExpression();
}

/*
  Напишите функцию, которая принимает обьект и строку,
  содержащую выражение доступа к свойствам обьекта.
  Функция возвращает значение запрашиваемого свойства либо
  бросает exception в случае ошибки.
  { a: { x: 2 }, b: 5 }, '.a.x' => 2
  { a: 1, b: 2 }, '.c' => exception
*/
//TODO: -- implementation of additional checks is required!
function evalKey(obj, expression) {
  if (expression.startsWith('.')) {
    const result = expression.split('.').slice(1).reduce((accumulator, index) => accumulator && accumulator[index], obj);
    if (result === undefined) {
      throw Error('Error');
    }
    return result;
  }
  throw Error('Error');
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
  evalKey
};
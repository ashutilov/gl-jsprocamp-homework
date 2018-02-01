/*
  Write a function, that has 2 required parameters, and any amount of optional parameters.
  Function should return a number - amount of optional parameters that were passed into function.
  Hint: you are allowed to modify both function definition and function body.
*/
function countOptional(a, b, ...optional) {
  return optional.length;
}

/*
  Write your implementation of native Function.prototype.bind method
*/
function bindContext(fn, context, ...outArgs) {
  return (...args) => fn.apply(context, [...outArgs, ...args]);
}

/*
  Write function that accepts 1 parameter - object. It should add to this object a log interface so as:
  const named = {name: 'Allen'}
  addLogCapability(named);
  named.log() // Log message #5: my name is Allen

  const unnamed = {msg: 'some text'}
  addLogCapability(unnamed);
  unnamed.log() // Log message #8: I dont have name
  unnamed.log() // Log message #9: I dont have name
  unnamed.log() // Log message #10: I dont have name

  Take to account, that you should track log call index starting from 1
*/
function addLogCapability(object) {
  let counter = 1;
  const nameText = object.name ? `my name is ${object.name}` : 'I dont have name';

  object.log = () => `Log message #${counter++}: ${nameText}`;
}

/*
  Write a function that creates custom topic logger:
  myLogger = logger('My Topic')
  myLogger('first message'); //=> My Topic: first message
*/
function logger(topic) {
  return msg => `${topic}: ${msg}`;
}

/*
  Implement left to right compose function
*/
function compose(...funcs) {
  return (...args) => funcs.reduce((previousValue, currentFunc) => currentFunc(previousValue), ...args);
}

/*
  Implement function that can turn function into partial application
  function sum(a, b) {
    return a+b;
  }

  const partialSum = partial(sum);
  const sumWith4 = partialSum(4);
  sumWith4(5) // 9
*/
function partial(fn) {
  return (...args) => fn.bind(null, ...args);
}

export default {
  countOptional,
  bindContext,
  addLogCapability,
  logger,
  compose,
  partial,
};

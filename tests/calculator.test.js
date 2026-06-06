const {
  appendToResult,
  backspace,
  operatorToResult,
  clearResult,
  normalizeExpression,
  calculateExpression,
  calculateResult,
  tenPow,
  getCurrentExpression,
  setCurrentExpression,
  getLastResult,
  setLastResult,
  updateResult
} = require('../assets/js/script.js');

beforeEach(() => {
  document.body.innerHTML = '<input id="result" value="0" />';
  setCurrentExpression('');
  setLastResult(0);
});

test('appendToResult updates expression and display', () => {
  appendToResult(1);
  appendToResult(2);
  appendToResult(3);
  expect(getCurrentExpression()).toBe('123');
  expect(document.getElementById('result').value).toBe('123');
});

test('operatorToResult converts ^ to ** and updates expression', () => {
  operatorToResult('^');
  expect(getCurrentExpression()).toBe('**');
});

test('backspace removes the last character', () => {
  setCurrentExpression('45');
  backspace();
  expect(getCurrentExpression()).toBe('4');
});

test('calculateExpression evaluates simple expressions', () => {
  expect(calculateExpression('2+3*4')).toBe(14);
});

test('calculateExpression returns Error for invalid input', () => {
  expect(calculateExpression('2+/3')).toBe('Error');
});

test('calculateResult updates display and LAST_RESULT', () => {
  setCurrentExpression('5*5');
  calculateResult();
  expect(document.getElementById('result').value).toBe('25');
  expect(getLastResult()).toBe('25');
});

test('tenPow computes 10^x and updates display', () => {
  setCurrentExpression('2');
  tenPow();
  expect(getCurrentExpression()).toBe('100');
  expect(document.getElementById('result').value).toBe('100');
});

test('normalizeExpression replaces pi and e correctly', () => {
  expect(normalizeExpression('pi+e')).toBe('Math.PI+Math.E');
});

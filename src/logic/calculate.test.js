import calculate from './calculate';

let calObject = { total: 0, next: 0, operation: null };

test('addition operations', () => {
  calObject = calculate(calObject, '9');
  calObject = calculate(calObject, '+');
  calObject = calculate(calObject, '10');
  calObject = calculate(calObject, '=');
  expect(calObject.total).toEqual('19');
});

test('subtraction', () => {
  calObject = calculate(calObject, '15');
  calObject = calculate(calObject, '-');
  calObject = calculate(calObject, '5');
  calObject = calculate(calObject, '-');
  calObject = calculate(calObject, '2');
  calObject = calculate(calObject, '=');
  expect(calObject.total).toEqual('8');
});

test('multiplication', () => {
  calObject = calculate(calObject, '5');
  calObject = calculate(calObject, 'x');
  calObject = calculate(calObject, '2');
  calObject = calculate(calObject, 'x');
  calObject = calculate(calObject, '2');
  calObject = calculate(calObject, '=');
  expect(calObject.total).toEqual('20');
});

test('reset', () => {
  calObject = calculate(calObject, '5');
  calObject = calculate(calObject, 'x');
  calObject = calculate(calObject, '2');
  calObject = calculate(calObject, 'x');
  calObject = calculate(calObject, '2');
  calObject = calculate(calObject, 'AC');
  expect(calObject.total).toEqual(null);
});

test('modulus', () => {
  calObject = calculate(calObject, '60');
  calObject = calculate(calObject, '%');
  calObject = calculate(calObject, '2');
  calObject = calculate(calObject, '=');
  expect(calObject.total).toEqual('0');
});

test('division', () => {
  calObject = calculate(calObject, '12');
  calObject = calculate(calObject, '÷');
  calObject = calculate(calObject, '2');
  calObject = calculate(calObject, '÷');
  calObject = calculate(calObject, '2');
  calObject = calculate(calObject, '=');
  expect(calObject.total).toEqual('3');
});

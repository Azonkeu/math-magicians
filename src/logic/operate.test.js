import operate from './operate';

test('should equal 4', () => {
  expect(operate(2, 2, '+')).toBe('4');
});

test('should equal 6', () => {
  expect(operate(8, 2, '-')).toBe('6');
});

test('should equal 9', () => {
  expect(operate(3, 3, 'x')).toBe('9');
});

test('should equal 3', () => {
  expect(operate(30, 10, '÷')).toBe('3');
});

test('should equal 1.2', () => {
  expect(operate(60, 2, '%')).toBe('0');
});

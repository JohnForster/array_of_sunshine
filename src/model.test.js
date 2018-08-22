import { findMethod } from './model';

test('it returns .join when required for desiredOutput', () => {
  expect(findMethod([1,2,3], "1,2,3" )).toBe(".join");
});

test("it returns 'no method found' if it is unable to find a method", () => {
  expect(findMethod([1,2,3],[2342,534534,65464654])).toBe('No method found');
});

test('it returns .pop when appropriate', () => {
  expect(findMethod([1,2,3], 3)).toBe('.pop')
})

test('it returns .reverse when appropriate', () => {
  expect(findMethod([1,2,3], [3,2,1])).toBe('.reverse')
})
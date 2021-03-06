import filter from "./filter.mjs";

// http://underscorejs.org/#filter
describe(`filter`, () => {
  test(`[1, 2, 3, 4, 5, 6] + num => num % 2 === 0`, () => {
    // given
    const given = [1, 2, 3, 4, 5, 6];

    // when
    const result = filter(given, num => num % 2 === 0);

    // then
    expect(result).toEqual([2, 4, 6]);
  });
});

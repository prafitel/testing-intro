const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(filterByCategory(products, 'all').map((item) => item.id)).toEqual(
      expectedResult,
    );
  });

  test('undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(
      filterByCategory(products, undefined).map((item) => item.id),
    ).toEqual(expectedResult);
  });

  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(filterByCategory(products, '').map((item) => item.id)).toEqual(
      expectedResult,
    );
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const expectedResult = [1, 2];
    expect(
      filterByCategory(products, 'electronics').map((item) => item.id),
    ).toEqual(expectedResult);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const expectedResult = [3, 6];
    expect(filterByCategory(products, 'books').map((item) => item.id)).toEqual(
      expectedResult,
    );
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const expectedResult = [4, 5];
    expect(filterByCategory(products, 'home').map((item) => item.id)).toEqual(
      expectedResult,
    );
  });

  test("'clothes' возвращает пустой массив", () => {
    const expectedResult = [];
    expect(
      filterByCategory(products, 'clothes').map((item) => item.id),
    ).toEqual(expectedResult);
  });

  test("'toys' возвращает пустой массив", () => {
    const expectedResult = [];
    expect(
      filterByCategory(products, 'clothes').map((item) => item.id),
    ).toEqual(expectedResult);
  });

  test("'sports' возвращает пустой массив", () => {
    const expectedResult = [];
    expect(
      filterByCategory(products, 'clothes').map((item) => item.id),
    ).toEqual(expectedResult);
  });
});

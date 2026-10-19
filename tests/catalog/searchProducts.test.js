const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const expectedResult = 1;
    expect(searchProducts(products, 'Наушники')[0].id).toEqual(expectedResult);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const expectedResult = 6;
    expect(searchProducts(products, 'Чистый код')[0].id).toEqual(
      expectedResult,
    );
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const expectedResult = 4;
    expect(searchProducts(products, 'Настольная лампа')[0].id).toEqual(
      expectedResult,
    );
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const expectedResult = 3;
    expect(searchProducts(products, 'javascript')[0].id).toEqual(
      expectedResult,
    );
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const expectedResult = 5;
    expect(searchProducts(products, 'ЧЕХОЛ')[0].id).toEqual(expectedResult);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const expectedResult = 1;
    expect(searchProducts(products, 'наушники')[0].id).toEqual(expectedResult);
  });

  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(searchProducts(products, '').map((item) => item.id)).toEqual(
      expectedResult,
    );
  });

  test('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(searchProducts(products, '   ').map((item) => item.id)).toEqual(
      expectedResult,
    );
  });

  test("'\t\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    expect(searchProducts(products, '\t\n').map((item) => item.id)).toEqual(
      expectedResult,
    );
  });
});

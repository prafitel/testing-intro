const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const expectedResult = [3, 6, 5, 4, 2, 1];
    expect(sortProductsByPrice(products, 'asc').map((item) => item.id)).toEqual(
      expectedResult,
    );
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const expectedResult = [3, 6, 5, 4, 2, 1];
    expect(sortProductsByPrice(products).map((item) => item.id)).toEqual(
      expectedResult,
    );
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const expectedResult = [3, 4, 1];
    const productsByCriteria = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );

    expect(
      sortProductsByPrice(productsByCriteria, 'asc').map((item) => item.id),
    ).toEqual(expectedResult);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const expectedResult = [1, 2, 4, 5, 6, 3];
    expect(
      sortProductsByPrice(products, 'desc').map((item) => item.id),
    ).toEqual(expectedResult);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const expectedResult = [1, 4, 3];
    const productsByCriteria = products.filter(({ id }) =>
      [3, 1, 4].includes(id),
    );

    expect(
      sortProductsByPrice(productsByCriteria, 'desc').map((item) => item.id),
    ).toEqual(expectedResult);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const expectedResult = [2, 5, 6];
    const productsByCriteria = products.filter(({ id }) =>
      [5, 2, 6].includes(id),
    );

    expect(
      sortProductsByPrice(productsByCriteria, 'desc').map((item) => item.id),
    ).toEqual(expectedResult);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const expectedResult = [1, 3, 4];
    const productsByCriteria = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );

    sortProductsByPrice(productsByCriteria, 'asc');

    const resultIds = productsByCriteria.map((item) => item.id);
    expect(resultIds).toEqual(expectedResult);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const expectedResult = [1, 3, 4];
    const productsByCriteria = products.filter(({ id }) =>
      [1, 3, 4].includes(id),
    );

    sortProductsByPrice(productsByCriteria, 'desc');

    const resultIds = productsByCriteria.map((item) => item.id);
    expect(resultIds).toEqual(expectedResult);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const expectedResult = [1, 2, 3, 4, 5, 6];
    const productsByCriteria = products.filter(({ id }) =>
      [1, 2, 3, 4, 5, 6].includes(id),
    );

    sortProductsByPrice(productsByCriteria, 'desc');

    const resultIds = productsByCriteria.map((item) => item.id);
    expect(resultIds).toEqual(expectedResult);
  });
});

function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart = [], item, quantity) {
  if (!quantity) {
    throw new RangeError('не принимает нулевое количество');
  }

  const existedCartItem = cart.find((existsItem) => item.id === existsItem.id);

  const currentQuantity = existedCartItem ? existedCartItem.quantity : 0;
  const newQuantity = currentQuantity + quantity;

  if (newQuantity > item.stock) {
    throw new RangeError(
      'не позволяет добавить больше товара, чем есть на складе',
    );
  }

  if (existedCartItem) {
    return cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: newQuantity }
        : cartItem,
    );
  }

  return [...cart, { ...item, quantity }];
}

function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, item, quantity) {
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

function changeQuantity(cart, productId, newQuantity) {
  if (!newQuantity) {
    throw new RangeError('не принимает нулевое количество');
  }

  const cartItem = cart.find((item) => item.id === productId);

  if (!cartItem) {
    return cart;
  }

  if (newQuantity > cartItem.stock) {
    throw new RangeError('не позволяет указать количество больше остатка');
  }

  return cart.map((item) =>
    item.id === productId ? { ...item, quantity: newQuantity } : item,
  );
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoCode = '') {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.round(subtotal * 0.1);
  }

  const delivery = subtotal >= 50000 ? 0 : 30000;

  const total = subtotal - discount + delivery;

  return {
    subtotal,
    discount,
    delivery,
    total,
  };
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

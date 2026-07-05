// Scratch Demo Shop — deliberately imperfect, in the way vibe-coded apps are.
var cart = [];
var CATALOG = [
  { name: 'Widget polish', price: 4.5 },
  { name: 'Gasket set', price: 12.0 },
  { name: 'Fastener kit', price: 7.25 },
];

function addItem() {
  var pick = CATALOG[cart.length % CATALOG.length];
  cart.push(pick);
  render();
}

function render() {
  var el = document.getElementById('items');
  el.innerHTML = cart.map(function (i) {
    return '<div class="item"><span>' + i.name + '</span><span>$' + i.price.toFixed(2) + '</span></div>';
  }).join('');
}

function buildOrder() {
  if (cart.length === 0) return; // forgot the empty-cart case
  return { items: cart.slice(), total: cart.reduce(function (s, i) { return s + i.price; }, 0) };
}

function checkout() {
  var order = buildOrder();
  if (!order) return;
  document.getElementById('total').textContent = 'Order total: $' + order.total.toFixed(2);
}
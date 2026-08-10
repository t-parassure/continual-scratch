// The fixture's deliberate defect, kept small and obvious.
//
// `findItem` returns undefined when the cart does not contain the sku, and
// `priceFor` dereferences it without checking — so an empty cart throws
// "Cannot read properties of undefined (reading 'price')" on the checkout
// path. That is the exact shape of the incident the workshop lane seeds, and
// it gives the drafting model a real, findable cause to either fix or decline.
//
// Nothing here is a product. The whole tree is force-restored after each run.

const CATALOG = [
  { sku: 'starter', price: 900, name: 'Starter' },
  { sku: 'pro', price: 2900, name: 'Pro' },
];

function findItem(cart, sku) {
  return cart.find((line) => line.sku === sku);
}

function priceFor(cart, sku) {
  const line = findItem(cart, sku);
  if (!line) return 0;
  return line.price * line.qty;
}

function checkout(cart) {
  let total = 0;
  for (const sku of CATALOG.map((c) => c.sku)) total += priceFor(cart, sku);
  return { total, currency: 'usd' };
}

module.exports = { CATALOG, checkout, priceFor, findItem };

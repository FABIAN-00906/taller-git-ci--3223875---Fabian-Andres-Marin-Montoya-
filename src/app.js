function suma(a, b) {
  return a + b;
}

console.log("App lista");

if (typeof module !== 'undefined') {
  module.exports = suma;
}
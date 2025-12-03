function suma(a, b) {
  return a + b;
}

console.log("App lista");

if (typeof document !== 'undefined') {
  function agregarItem(texto) {
    const lista = document.getElementById('lista');
    if (!lista) return;

    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
  }}

if (typeof module !== 'undefined') {
  module.exports = suma;
}
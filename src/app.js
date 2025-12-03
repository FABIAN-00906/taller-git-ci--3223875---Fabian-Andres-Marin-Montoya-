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
  }

    const boton = document.getElementById('agregarBtn');
  if (boton) {
    boton.addEventListener('click', () => {
      const input = document.getElementById('texto');
      if (!input) return;

      const texto = input.value.trim();
      if (texto !== '') {
        agregarItem(texto);
        input.value = '';
      }
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = { suma };
}
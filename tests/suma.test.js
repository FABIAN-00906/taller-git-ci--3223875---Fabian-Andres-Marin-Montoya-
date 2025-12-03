const suma = require('../src/app.js');

test('La suma debe retornar el resultado correcto', () => {
  expect(suma(2, 3)).toBe(5);
});

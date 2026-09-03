/*
2. Adentro, crear `matematica.js` que exporte (con `export`) dos funciones: `sumar(a, b)` y
 `promedio(numeros)`.
*/

export function sumar(a, b) {
  return a + b;
}

export function promedio(numeros) {
  if (!numeros || numeros.length === 0) return 0;

  let total = 0;
  numeros.forEach(num => {
    total += num;
  });

  return total / numeros.length;
}

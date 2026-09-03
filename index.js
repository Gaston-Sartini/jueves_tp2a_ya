const verify = require("./verify.js");
const http = require("node:http");
// console.log(`🚀 ~ http:`, http)
// console.log(require)

//  console.log(verify(true))

// verify(true)
//   .then((data) => data+" lolo")
//   .then((data2) => console.log(data2))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("termino");
//   });

// async function queOnda() {
//   try {
//     setTimeout(async () => {
//       const data = await verify(true);
//       const data2 = data + " lolo";
//       console.log(`🚀 ~ queOnda ~ data:`, data);
//       console.log(`🚀 ~ queOnda ~ data2:`, data2);
//       return data2;
//     }, 1000);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("termino");
//   }
// }

// queOnda();

// async function sumar(n1, n2) {
//      return n1+n2
// }

// let resultado=sumar(2,3)
// console.log(`🚀 ~ resultado:`, resultado)
// -----------------------------

const server = http.createServer((request, response) => {
  const url = request.url;
  if (url == "/") {
    response.end("server ok");
  } else if (url == "/saludo") {
    response.end("hola");
  } else {
    response.end("nada");
  }
});
// console.log(`🚀 ~ server:`, server)

server.listen(8000, () => {
  console.log(`🚀 ~ server ok in port:`, 8000);
});

console.log(2 === "2");

/*

4. Actualizar `index.js`: como ahora todas las funciones son `async`, hay que llamarlas con `await`
 dentro de una función `async` (o encadenadas con `.then`). Probar `listarLibros()`,
  `agregarLibro(...)` con un libro nuevo, y volver a `listarLibros()` para confirmar que quedó
   guardado — **incluso si vuelven a correr el script**, el libro nuevo tiene que seguir estando
    (a diferencia de la clase 1, donde vivía solo en memoria).

*/
const {
    listarLibros,
    buscarPorId,
    buscarLibrosPorAutor,
    librosEnStock,
    agregarLibro
} = require('./libroService.js');

async function main() {
  try {
    // 1. Listar todos los libros iniciales
    console.log('--- Lista de libros inicial ---');
    const librosIniciales = await listarLibros();
    console.log(librosIniciales);

    // 2. Buscar un libro por ID
    console.log('\n--- Buscar por ID (id: 2) ---');
    const libroPorId = await buscarPorId(2);
    console.log(libroPorId);

    // 3. Buscar libros por autor
    console.log('\n--- Buscar por autor ("Garcia Marquez") ---');
    const librosPorAutor = await buscarLibrosPorAutor('Garcia Marquez');
    console.log(librosPorAutor);

    // 4. Filtrar libros en stock
    console.log('\n--- Libros con stock disponible ---');
    const enStock = await librosEnStock();
    console.log(enStock);

    // 5. Agregar un libro nuevo
    console.log('\n--- Agregando nuevo libro ---');
    const nuevo = await agregarLibro({
      titulo: '1984',
      autor: 'George Orwell',
      stock: 5
    });
    console.log('Libro agregado con éxito:', nuevo);

    // 6. Volver a listar para confirmar que persiste en el archivo
    console.log('\n--- Lista de libros actualizada ---');
    const librosActualizados = await listarLibros();
    console.log(librosActualizados);

  } catch (error) {
    console.error('Ocurrió un error:', error.message);
  }
}

main();
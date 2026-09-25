const { listarLibros, buscarPorId, buscarPorAutor, contarConStock } = require("./libroService");

console.log("Todos los libros:", listarLibros());
console.log("Libro con id 3:", buscarPorId(3));
console.log("Libros de Orwell:", buscarPorAutor("orwell"));
console.log("Libros con stock:", contarConStock());

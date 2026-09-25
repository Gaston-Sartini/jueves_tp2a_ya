const libros = require("./data/libros");

function listarLibros() {
  return libros;
}

function buscarPorId(id) {
  return libros.find((libro) => libro.id === id);
}

function buscarPorAutor(autor) {
  return libros.filter((libro) => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}

function contarConStock() {
  return libros.filter((libro) => libro.stock > 0).length;
}

module.exports = { listarLibros, buscarPorId, buscarPorAutor, contarConStock };

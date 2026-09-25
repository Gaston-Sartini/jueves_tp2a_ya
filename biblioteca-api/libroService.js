const fs = require("fs/promises");
const path = require("path");
const RUTA = path.join(__dirname, "data", "libros.json");

async function listarLibros() {
  const data = await fs.readFile(RUTA, "utf-8");
  const libros = JSON.parse(data);
  return libros;
}

async function buscarPorId(id) {
  const libros = await listarLibros();
  return libros.find((libro) => libro.id === id);
}

async function buscarPorAutor(autor) {
  const libros = await listarLibros();
  return libros.filter((libro) => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}

async function contarConStock() {
  const libros = await listarLibros();
  return libros.filter((libro) => libro.stock > 0).length;
}

async function agregarLibro(libro){
  const libros = await listarLibros();
  let nuevoId = 1;
  if(libros.length > 0){
    const ids = libros.map((l) => l.id);
    nuevoId = Math.max(...ids) + 1;
  }
  const nuevoLibro = {id: nuevoId, ...libro};
  libros.push(nuevoLibro);
  await fs.writeFile(RUTA, JSON.stringify(libros, null, 2));
  return nuevoLibro;
}

module.exports = { listarLibros, buscarPorId, buscarPorAutor, contarConStock, agregarLibro };

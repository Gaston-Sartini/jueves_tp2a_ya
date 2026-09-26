const libros = require("../data/libros.js");

function error(code, message){
  return {error: {code, message}};
}

function listar(req, res) {
  let resultado = libros;
  
  if(req.query.autor){
    const autor = (req.query.autor).toLowerCase();
    resultado = resultado.filter((libro) => libro.autor.toLowerCase().includes(autor));
  }
  if(req.query.sort){
    let campo = req.query.sort;
    let orden = 1;
    if (campo.startsWith("-")) {
      orden = -1;
      campo = campo.slice(1);
    }
    resultado = [...resultado].sort((a, b) => {
      if (a[campo] < b[campo]) return -1 * orden;
      if (a[campo] > b[campo]) return 1 * orden;
      return 0;
    })
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const inicio = (page -1) * limit;
  resultado = resultado.slice(inicio, inicio + limit);
  
  res.status(200).json(resultado);  
};

function obtener(req, res) {
  const id = Number(req.params.id);
  const libroPorId = libros.find(libro => libro.id === id);
  if(!libroPorId){
    return res.status(404).json(error("LIBRO_NO_ENCONTRADO", "Libro no encontrado"));
  }
  res.status(200).json(libroPorId);
};

function crear(req, res) {
  if(!req.body.titulo || !req.body.autor){
    return res.status(400).json(error("DATOS_INCOMPLETOS", "El titulo y el autor son obligatorios"));
  }
  let id = 1;
  const librosIds = libros.map((libro) => libro.id);
  if(librosIds.length > 0){
    id = Math.max(...librosIds) + 1;
  }
  const nuevoLibro = {id, ...req.body};
  libros.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
};

function actualizar(req, res) {
  const id = Number(req.params.id);
  const indice = libros.findIndex((libro) => libro.id === id);
  if(indice === -1){
    return res.status(404).json(error("LIBRO_NO_ENCONTRADO", "Libro no encontrado"));
  }
  const libroActualizado = {...req.body, id};
  libros[indice] = libroActualizado;
  res.status(200).json(libroActualizado);
};

function actualizarParcial (req, res) {
  const id = Number(req.params.id);
  const indice = libros.findIndex((libro) => libro.id === id);
  if(indice === -1){
    return res.status(404).json(error("LIBRO_NO_ENCONTRADO", "Libro no encontrado"));
  }
  const libroActualizado = {...libros[indice], ...req.body, id};
  libros[indice] = libroActualizado;
  res.status(200).json(libroActualizado);
};

function eliminar (req, res) {
  const id = Number(req.params.id);
  const indice = libros.findIndex((libro) => libro.id === id);
  if(indice === -1){
    return res.status(404).json(error("LIBRO_NO_ENCONTRADO", "Libro no encontrado"));
  }
  libros.splice(indice, 1);
  res.status(200).json({mensaje: "Libro eliminado correctamente."});
};

module.exports = {listar, obtener, crear, actualizar, eliminar, actualizarParcial};
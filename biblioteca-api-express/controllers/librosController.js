const libros = require("../data/libros.js");


function listar(req, res) {
  if(req.query.autor != undefined){
    const autor = (req.query.autor).toLowerCase();
    const librosAutor = libros.filter((libro) => libro.autor.toLowerCase().includes(autor));
    res.status(200).json(librosAutor);    
  } else {
    res.status(200).json(libros);
  };
};

function obtener(req, res) {
  const id = Number(req.params.id);
  const libroPorId = libros.find(libro => libro.id === id);
  if(!libroPorId){
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.status(200).json(libroPorId);
};

function crear(req, res) {
  if(!req.body.titulo || !req.body.autor){
    return res.status(400).json({ error: "El titulo y el autor son obligatorios" });
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
    return res.status(404).json({error: "Libro no encontrado."});
  }
  const libroActualizado = {...req.body, id};
  libros[indice] = libroActualizado;
  res.status(200).json(libroActualizado);
};

function actualizarParcial (req, res) {
  const id = Number(req.params.id);
  const indice = libros.findIndex((libro) => libro.id === id);
  if(indice === -1){
    return res.status(404).json({error: "Libro no encontrado."});
  }
  const libroActualizado = {...libros[indice], ...req.body, id};
  libros[indice] = libroActualizado;
  res.status(200).json(libroActualizado);
};

function eliminar (req, res) {
  const id = Number(req.params.id);
  const indice = libros.findIndex((libro) => libro.id === id);
  if(indice === -1){
    return res.status(404).json({error: "Libro no encontrado."});
  }
  libros.splice(indice, 1);
  res.status(200).json({mensaje: "Libro eliminado correctamente."});
};

module.exports = {listar, obtener, crear, actualizar, eliminar, actualizarParcial};
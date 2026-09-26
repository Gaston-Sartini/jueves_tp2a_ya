const autores = require("../data/autores.js");

function error(code, message){
  return {error: {code, message}};
}

function listar(req, res) {    
  res.status(200).json(autores);  
};

function obtener(req, res) {
  const id = Number(req.params.id);
  const autorPorId = autores.find(autor => autor.id === id);
  if(!autorPorId){
    return res.status(404).json(error("AUTOR_NO_ENCONTRADO", "Autor no encontrado"));
  }
  res.status(200).json(autorPorId);
};

module.exports = {listar, obtener};
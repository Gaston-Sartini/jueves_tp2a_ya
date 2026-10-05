import authors from "../data/authors.js";

function error(code, message){
  return {error: {code, message}};
}

function list(req, res) {
  res.status(200).json(authors);
};

function getById(req, res) {
  const id = Number(req.params.id);
  const author = authors.find(author => author.id === id);
  if(!author){
    return res.status(404).json(error("AUTHOR_NOT_FOUND", `No author exists with id ${id}`));
  }
  res.status(200).json(author);
};

export default {list, getById};

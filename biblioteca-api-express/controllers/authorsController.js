import authors from "../data/authors.js";
import AppError from "../errors/AppError.js";

function list(req, res) {
  res.status(200).json(authors);
};

function getById(req, res, next) {
  const id = Number(req.params.id);
  const author = authors.find(author => author.id === id);
  if(!author){
    return next(new AppError("AUTHOR_NOT_FOUND", `No author exists with id ${id}`, 404));
  }
  res.status(200).json(author);
};

export default {list, getById};

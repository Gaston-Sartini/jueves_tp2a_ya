import AppError from "../errors/AppError.js";
import dao from "../dao/booksMemoryDao.js";
// import dao from "../dao/booksFakeDao.js";
import getBooks from "../usecases/books/getBooks.js";
import getBookById from "../usecases/books/getBookById.js";
import createBook from "../usecases/books/createBook.js";
import updateBook from "../usecases/books/updateBook.js";
import deleteBook from "../usecases/books/deleteBook.js";

function bookNotFound(id) {
  return new AppError("BOOK_NOT_FOUND", `No book exists with id ${id}`, 404);
}

async function list(req, res) {
  const { author, sort } = req.query;
  const { page, limit } = req.pagination;

  const result = await getBooks({author, sort, page, limit}, dao);

  res.status(200).json(result);
};

async function get(req, res, next) {
  const id = Number(req.params.id);
  const book = await getBookById(id, dao);
  if(!book){
    throw bookNotFound(id);
  }
  res.status(200).json(book);
};

async function create(req, res, next) {
  return res.status(201).json(await createBook(req.body, dao));
};

async function update(req, res, next) {
  const id = Number(req.params.id);
  const updatedBook = await updateBook(id, req.body, dao);
  if(!updatedBook){
    throw bookNotFound(id);
  }
  res.status(200).json(updatedBook);
};

async function remove(req, res, next) {
  const id = Number(req.params.id);
  if(!await deleteBook(id, dao)){
    throw bookNotFound(id);
  }
  res.status(204).end();
};  

export default {list, get, create, update, remove};

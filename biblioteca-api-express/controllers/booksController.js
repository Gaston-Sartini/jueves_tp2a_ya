import AppError from "../errors/AppError.js";

function bookNotFound(id) {
  return new AppError("BOOK_NOT_FOUND", `No book exists with id ${id}`, 404);
}

class BooksController {
  #useCases;
  constructor(useCases) {
    this.#useCases = useCases;
  }
  list = async (req, res) => {
    const { author, sort } = req.query;
    const { page, limit } = req.pagination;
    const result = await this.#useCases.getBooks({author, sort, page, limit});
    res.status(200).json(result);
  };
  get = async (req, res, next) => {
    const id = Number(req.params.id);
    const book = await this.#useCases.getBookById(id);
    if(!book){
      throw bookNotFound(id);
    }
    res.status(200).json(book);
  };
  create = async (req, res, next) => {
    return res.status(201).json(await this.#useCases.createBook(req.body));
  };
  update = async (req, res, next) => {
    const id = Number(req.params.id);
    const updatedBook = await this.#useCases.updateBook(id, req.body);
    if(!updatedBook){
      throw bookNotFound(id);
    }
    res.status(200).json(updatedBook);
  };
  remove = async (req, res, next) => {
    const id = Number(req.params.id);
    if(!await this.#useCases.deleteBook(id)){
      throw bookNotFound(id);
    }
    res.status(204).end();
  };
};

export default BooksController;
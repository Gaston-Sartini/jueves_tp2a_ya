import AppError from "../errors/AppError.js";


/**
 * Controlador de Libros basado en Clases.
 * Recibe la instancia del DAO a través de Inyección de Dependencias en el constructor.
 * Utiliza propiedades de flecha para preservar la referencia a `this.#dao` al pasarse como middleware en Express.
 */
class BooksController {
  // El prefijo '#' indica un campo privado de clase (ES2020).
  // Solo se puede acceder a `#useCases` desde dentro de esta clase (encapsulamiento).
  #useCases;

  constructor(useCases) {
    this.#useCases = useCases;
  }

  // GET /books (?autor=...&isbn=...&sort=...)
  list = async (req, res) => {
    const books = await this.#useCases.getBooks(req.query);
    res.json(books);
  };

  // GET /books/:id
  get = async (req, res) => {
    const book = await this.#useCases.getBookById(Number(req.params.id));
    if (!book) throw new AppError("BOOK_NOT_FOUND", "No existe un libro con ese id", 404);
    res.json(book);
  };

  // POST /books
  create = async (req, res) => {
    const book = await this.#useCases.createBook(req.body);
    res.status(201).json(book);
  };

  // PUT /books/:id
  update = async (req, res) => {
    const book = await this.#useCases.updateBook(Number(req.params.id), req.body);
    if (!book) throw new AppError("BOOK_NOT_FOUND", "No existe un libro con ese id", 404);
    res.json(book);
  };

  // DELETE /books/:id
  remove = async (req, res) => {
    const deleted = await this.#useCases.deleteBook(Number(req.params.id));
    if (!deleted) throw new AppError("BOOK_NOT_FOUND", "No existe un libro con ese id", 404);
    res.status(204).send();
  };
}

export default BooksController;

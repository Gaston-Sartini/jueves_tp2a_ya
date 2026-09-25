import books from "../data/books.js";
import AppError from "../errors/AppError.js";
import createBook from "../useCases/books/createBook.js";

const bookNotFound = (id) =>
  new AppError("BOOK_NOT_FOUND", `No book exists with id ${id}`, 404);

// GET /books — filtro (?author=), orden (?sort=) y paginado (?page=&limit=)
function list(req, res, next) {
  const { author, sort } = req.query;
  let result = [...books];

  if (author) {
    const term = author.toLowerCase();
    result = result.filter((b) => b.author.toLowerCase().includes(term));
  }

  if (sort) {
    const desc = sort.startsWith("-");
    const field = desc ? sort.slice(1) : sort;
    result.sort((a, b) => {
      if (a[field] < b[field]) return desc ? 1 : -1;
      if (a[field] > b[field]) return desc ? -1 : 1;
      return 0;
    });
  }

  const { page, limit } = req.pagination;
  const from = (page - 1) * limit;
  result = result.slice(from, from + limit);

  res.status(200).json(result);
}

// GET /books/:id
function get(req, res, next) {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return next(bookNotFound(req.params.id));
  res.status(200).json(book);
}

// POST /books — req.body ya validado por validate(createBookSchema)
async function create(req, res, next) {
  const newBook = await createBook(req.body);
  res.status(201).json(newBook);
}

// PUT /books/:id — req.body ya validado por validate(updateBookSchema)
function update(req, res, next) {
  const index = books.findIndex((b) => b.id === Number(req.params.id));
  if (index === -1) return next(bookNotFound(req.params.id));

  books[index] = { ...books[index], ...req.body, id: books[index].id };
  res.status(200).json(books[index]);
}

// DELETE /books/:id
function remove(req, res, next) {
  const index = books.findIndex((b) => b.id === Number(req.params.id));
  if (index === -1) return next(bookNotFound(req.params.id));

  books.splice(index, 1);
  res.status(200).json({ message: "Book deleted successfully" });
}

export default { list, get, create, update, remove };

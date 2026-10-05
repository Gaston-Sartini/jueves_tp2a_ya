import books from "../data/books.js";

function error(code, message){
  return {error: {code, message}};
}

function list(req, res) {
  let result = books;

  if(req.query.author){
    const author = (req.query.author).toLowerCase();
    result = result.filter((book) => book.author.toLowerCase().includes(author));
  }
  if(req.query.sort){
    let field = req.query.sort;
    let order = 1;
    if (field.startsWith("-")) {
      order = -1;
      field = field.slice(1);
    }
    result = [...result].sort((a, b) => {
      if (a[field] < b[field]) return -1 * order;
      if (a[field] > b[field]) return 1 * order;
      return 0;
    })
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const start = (page -1) * limit;
  const total = result.length;
  result = result.slice(start, start + limit);

  res.status(200).json({page, limit, total, data: result});
};

function getById(req, res) {
  const id = Number(req.params.id);
  const book = books.find(book => book.id === id);
  if(!book){
    return res.status(404).json(error("BOOK_NOT_FOUND", `No book exists with id ${id}`));
  }
  res.status(200).json(book);
};

function create(req, res) {
  if(!req.body.title || !req.body.author){
    return res.status(400).json(error("INCOMPLETE_DATA", "Title and author are required"));
  }
  let id = 1;
  const bookIds = books.map((book) => book.id);
  if(bookIds.length > 0){
    id = Math.max(...bookIds) + 1;
  }
  const newBook = {id, ...req.body};
  books.push(newBook);
  res.status(201).json(newBook);
};

function update(req, res) {
  const id = Number(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if(index === -1){
    return res.status(404).json(error("BOOK_NOT_FOUND", `No book exists with id ${id}`));
  }
  const updatedBook = {...req.body, id};
  books[index] = updatedBook;
  res.status(200).json(updatedBook);
};

function patch (req, res) {
  const id = Number(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if(index === -1){
    return res.status(404).json(error("BOOK_NOT_FOUND", `No book exists with id ${id}`));
  }
  const updatedBook = {...books[index], ...req.body, id};
  books[index] = updatedBook;
  res.status(200).json(updatedBook);
};

function remove (req, res) {
  const id = Number(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if(index === -1){
    return res.status(404).json(error("BOOK_NOT_FOUND", `No book exists with id ${id}`));
  }
  books.splice(index, 1);
  res.status(200).json({message: "Book deleted successfully"});
};

export default {list, getById, create, update, remove, patch};

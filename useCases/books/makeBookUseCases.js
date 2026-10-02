import getBooks from "./getBooks.js";
import getBookById from "./getBookById.js";
import createBook from "./createBook.js";
import updateBook from "./updateBook.js";
import deleteBook from "./deleteBook.js";

function makeBookUseCases(dao) {
  return {
    getBooks: (filters) => getBooks(filters, dao),
    getBookById: (id) => getBookById(id, dao),
    createBook: (data) => createBook(data, dao),
    updateBook: (id, changes) => updateBook(id, changes, dao),
    deleteBook: (id) => deleteBook(id, dao),
  };
}

export default makeBookUseCases;
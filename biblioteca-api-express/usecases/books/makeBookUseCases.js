import createBook from './createBook.js';
import deleteBook from './deleteBook.js';
import getBookById from './getBookById.js';
import getBooks from './getBooks.js';
import updateBook from './updateBook.js';

function makeBookUseCases(dao) {
  return {
    getBooks: (options) => getBooks(options, dao),
    getBookById: (id) => getBookById(id, dao),
    createBook: (data) => createBook(data, dao),
    updateBook: (id, changes) => updateBook(id, changes, dao),
    deleteBook: (id) => deleteBook(id, dao)
  };
};

export default makeBookUseCases;
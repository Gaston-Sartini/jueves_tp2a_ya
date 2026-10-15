import createBook from './createBook.js';
import deleteBook from './deleteBook.js';
import getBookById from './getBookById.js';
import getBooks from './getBooks.js';
import updateBook from './updateBook.js';

function makeBookUseCases(dao) {
  return {
    getBooks(options) {
      console.log("[UseCase] Executing getBooks", options);
      return getBooks(options, dao);
    },  
    getBookById(id) {
      console.log("[UseCase] Executing getBookById", id);
      return getBookById(id, dao);
    },
    createBook(data) {
      console.log("[UseCase] Executing createBook", data);
      return createBook(data, dao);
    },
    updateBook(id, changes) {
      console.log("[UseCase] Executing updateBook", id, changes);
      return updateBook(id, changes, dao);
    },
    deleteBook(id){
      console.log("[UseCase] Executing deleteBook", id);
      return deleteBook(id, dao);
    }
  };
};

export default makeBookUseCases;
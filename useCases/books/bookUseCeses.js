import createBook from "./createBook.js";
import getBookById from "./getBookById.js";
import getBooks from "./getBooks.js";
import updateBook from "./updateBook.js";
import deleteBook from "./deleteBook.js";

function bookUseCases(dao) {
    return {
        getBooks: getBooks(dao),
        getBookById: getBookById(dao),
        createBook: createBook(dao),
        updateBook: updateBook(dao),
        deleteBook: deleteBook(dao)
    }
}

export default bookUseCases
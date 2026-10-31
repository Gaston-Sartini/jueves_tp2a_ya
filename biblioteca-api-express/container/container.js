import getBooksDao from "../dao/booksDaoFactory.js"
import getUsersDao from "../dao/usersDaoFactory.js"
import makeBookUseCases from "../usecases/books/makeBookUseCases.js"
import makeUserUseCases from "../usecases/users/makeUserUseCases.js"
import BooksController from "../controllers/booksController.js"
import UsersController from "../controllers/usersController.js"
import createRouter from "../routes/index.js"

const booksDao = getBooksDao();
await booksDao.init();
const bookUseCases = makeBookUseCases(booksDao);
const booksController = new BooksController(bookUseCases);

const usersDao = getUsersDao();
await usersDao.init();
const userUseCases = makeUserUseCases(usersDao);
const usersController = new UsersController(userUseCases);

const router = createRouter(booksController, usersController);

export default router;
import express from "express";
import logger from "./middlewares/logger.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import dao from "./dao/booksMemoryDao.js";
import makeBookUseCases from "./usecases/books/makeBookUseCases.js";
import BooksController from "./controllers/booksController.js";
import createRouter from "./routes/index.js";

const app = express();
const bookUseCases = makeBookUseCases(dao);
const booksController = new BooksController(bookUseCases);
app.use(logger);
app.use(express.json());
app.use(createRouter(booksController));
app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => console.log("Server Online: http://localhost:3000"));

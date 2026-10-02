import express from "express";
import logger from "./middlewares/logger.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import createRouter from "./routes/index.js";
import dao from "./dao/booksMemoryDao.js";
import makeBookUseCases from "./useCases/books/makeBookUseCases.js";
import BooksController from "./controllers/booksController.js";

const app = express();
const PORT = process.env.PORT || 8000;
const bookUseCases = makeBookUseCases(dao);
const booksController = new BooksController(bookUseCases);

// Middlewares globales
app.use(logger);
app.use(express.json());

// Router centralizado de la aplicación
app.use(createRouter(booksController));


// Manejadores de cierre (404 Not Found y Error Handler global)
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});

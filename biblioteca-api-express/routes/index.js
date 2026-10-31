import {Router} from "express";
import createBooksRouter from "./booksRoutes.js";
import authorsRoutes from "./authorsRoutes.js"
import createUsersRouter from "./usersRoutes.js";


function createRouter(booksController, usersController) {
    const router = Router();
    router.use("/books", createBooksRouter(booksController));
    router.use("/authors", authorsRoutes);
    router.use("/users", createUsersRouter(usersController));
    return router;
}

export default createRouter;
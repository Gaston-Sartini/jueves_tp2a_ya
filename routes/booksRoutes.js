import { Router } from "express";
import { getAllBooks, getBookById, createBook, updateBookById, deleteBookById } from "../controllers/booksController.js";

const booksRoutes = Router();

booksRoutes.get("/", getAllBooks);
booksRoutes.get("/:id", getBookById);
booksRoutes.post("/", createBook);
booksRoutes.put("/:id", updateBookById);
booksRoutes.delete("/:id", deleteBookById);


export default booksRoutes;

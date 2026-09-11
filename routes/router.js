import { Router } from "express";
import categoriesRoutes from "./categoriesRoutes.js"; 
import booksRoutes from "./booksRoutes.js";

const router= Router();

router.use("/categories", categoriesRoutes);
router.use("/books", booksRoutes);

export default router;
import express from "express";
import booksRoutes from "./routes/booksRoutes.js";
import authorsRoutes from "./routes/authorsRoutes.js";
import logger from "./middlewares/logger.js";
import notFound from "./middlewares/notFound.js";
const app = express();

app.use(logger);
app.use(express.json());
app.use("/books", booksRoutes);
app.use("/authors", authorsRoutes);
app.use(notFound);

app.listen(3000, () => console.log("Server Online: http://localhost:3000"));

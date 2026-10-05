import express from "express";
import librosRoutes from "./routes/librosRoutes.js";
import autoresRoutes from "./routes/autoresRoutes.js";
import logger from "./middlewares/logger.js";
import notFound from "./middlewares/notFound.js";
const app = express();

app.use(logger);
app.use(express.json());
app.use("/libros", librosRoutes);
app.use("/autores", autoresRoutes);
app.use(notFound);

app.listen(3000, () => console.log("Server Online: http://localhost:3000"));
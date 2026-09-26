const express = require("express");
const app = express();
const librosRoutes = require("./routes/librosRoutes.js");
const logger = require("./middlewares/logger.js");
const notFound = require("./middlewares/notFound.js");

app.use(logger);
app.use(express.json());
app.use("/libros", librosRoutes);
app.use(notFound);

app.listen(3000, () => console.log("Server Online: http://localhost:3000"));
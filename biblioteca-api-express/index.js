const express = require("express");
const app = express();
const librosRoutes = require("./routes/librosRoutes.js");

app.use(express.json());
app.use("/libros", librosRoutes);

app.listen(3000, () => console.log("Server Online: http://localhost:3000"));
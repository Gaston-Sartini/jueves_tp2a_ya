import express from "express";
import logger  from "./middlewares/logger.js";
import router from "./routes/router.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/app", router);

app.use(notFound);

app.use(errorHandler)
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

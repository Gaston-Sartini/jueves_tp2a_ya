import express from "express";
import logger from "./middlewares/logger.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import router from "./container/container.js"

const app = express();
app.use(logger);
app.use(express.json());
app.use(router);
app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => console.log("Server Online: http://localhost:3000"));

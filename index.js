import express from "express";
import { logger } from "./middlewares/logger.js";
import { mensaje } from "./middlewares/mensaje.js";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/app", router);


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

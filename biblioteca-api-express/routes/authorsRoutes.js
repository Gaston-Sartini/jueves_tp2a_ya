import express from "express";
import controller from "../controllers/authorsController.js";

const router = express.Router();

router.get("/", controller.list);
router.get("/:id", controller.getById);

export default router;

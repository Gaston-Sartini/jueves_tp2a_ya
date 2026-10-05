import express from "express";
import controller from "../controllers/autoresController.js";

const router = express.Router();

router.get("/", controller.listar);
router.get("/:id", controller.obtener);

export default router;
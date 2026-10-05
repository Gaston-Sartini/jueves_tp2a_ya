import express from "express";
import controller from "../controllers/booksController.js";

const router = express.Router();

router.get("/", controller.list);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.patch("/:id", controller.patch);

export default router;

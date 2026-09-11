import { Router } from "express";

const categoriesRoutes = Router();

categoriesRoutes.get("/", (req, res) => {
  res.send("Get all Categories");
});
categoriesRoutes.get("/:id", (req, res) => {
  res.send("Get category by ID");
});

categoriesRoutes.post("/", (req, res) => {
  res.send("Create a new category");
});

categoriesRoutes.put("/:id", (req, res) => {
  res.send("Update category by ID");
});

categoriesRoutes.delete("/:id", (req, res) => {
  res.send("Delete category by ID");
});

export default categoriesRoutes;

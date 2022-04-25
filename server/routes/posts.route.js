const express = require("express");
const posts_router = express.Router();
const posts = require("../controllers/posts.controller");

posts_router.get("/", posts.findAll).post("/", posts.create);
posts_router
  .get("/:id", posts.findById)
  .put("/:id", posts.updateById)
  .delete("/:id", posts.deleteById);

module.exports = posts_router;

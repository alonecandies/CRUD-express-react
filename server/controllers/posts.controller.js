const Post = require("../models/posts.model");

exports.findAll = (req, res) => {
  Post.findAll((err, data) => {
    if (err)
      res.status(500).json({
        message: err.message || "Some error occurred.",
      });
    else res.json(data);
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Post.findById(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found post with id ${id}.`,
        });
      } else {
        res.status(500).json({
          message: "Error retrieving post with id " + id,
        });
      }
    } else res.status(200).json(data);
  });
};

exports.create = (req, res) => {
  Post.create(req.body, (err, data) => {
    if (err)
      res.status(500).json({
        message: err.message || "Some error occurred.",
      });
    else res.json(data);
  });
};

exports.updateById = (req, res) => {
  const id = req.params.id;
  Post.updateById(id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found post with id ${id}.`,
        });
      } else {
        res.status(500).json({
          message: "Error updating post with id " + id,
        });
      }
    } else res.status(200).json(data);
  });
};

exports.deleteById = (req, res) => {
  const id = req.params.id;
  Post.deleteById(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found post with id ${id}.`,
        });
      } else {
        res.status(500).json({
          message: "Error deleting post with id " + id,
        });
      }
    } else res.status(200).json(data);
  });
};

const connection = require("../configs/db");

const Posts = function (post) {
  this.title = post.title;
  this.author = post.author;
  this.description = post.description;
  this.content = post.content;
  this.img = post.img;
};

Posts.findAll = (result) => {
  connection.query("SELECT * FROM blogs ORDER BY id DESC", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      console.log("Find all completed!");
      result(null, res);
    }
  });
};

Posts.findById = (postId, result) => {
  connection.query(
    `SELECT * FROM blogs WHERE id = ${postId} ORDER BY id DESC`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        let i;
        for (i = 0; i < res.length; i++) {
          console.log("found post with id ", postId);
        }
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

Posts.create = (body, result) => {
  connection.query(
    "INSERT INTO blogs(title,author,description,content,img) VALUES (?,?,?,?,?)",
    [body.title, body.author, body.description, body.content, body.img],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        result(null, res);
      }
    }
  );
};

Posts.updateById = (postId, body, result) => {
  connection.query(
    "UPDATE blogs SET title = ?, author = ?, description = ?, content = ?, img = ? WHERE id = ?",
    [body.title, body.author, body.description, body.content, body.img, postId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
        result(null, res);
      }
    }
  );
};

Posts.deleteById = (postId, result) => {
  connection.query("DELETE FROM blogs WHERE id = ?", postId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null, res);
    }
  });
};

module.exports = Posts;

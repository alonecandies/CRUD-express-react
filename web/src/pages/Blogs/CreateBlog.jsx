import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      author,
      description,
      content,
      img,
    };
    axios
      .post("http://localhost:4000/posts", newBlog)
      .then(() => {
        navigation("/blogs");
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
      });
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-center mt-3">Create Blog</h1>
      <Form.Group className="mt-3">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter blog title..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Blog Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter blog author name..."
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Blog Description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Enter blog description..."
          rows={3}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Label>Blog Content</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Enter blog content..."
          rows={6}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Blog Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter blog image link..."
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
      </Form.Group>

      <Button className="mt-3" variant="primary" type="submit">
        Create
      </Button>
      <p style={{ color: "red" }}>{errMsg}</p>
    </Form>
  );
}

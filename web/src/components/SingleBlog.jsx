import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Col, ButtonGroup, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SingleBlog({ blog, setBlogs }) {
  const [show, setShow] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const formatedDate = blog ? new Date(blog.updatedAt) : null;
  const month = formatedDate.getUTCMonth() + 1;
  const day = formatedDate.getUTCDate();
  const year = formatedDate.getUTCFullYear();
  const date = day + "." + month + "." + year;
  useEffect(() => {
    if (deleteStatus) {
      setBlogs((prevBlogs) => prevBlogs.filter((item) => item.id !== blog.id));
      axios.delete(`http://localhost:4000/posts/${blog.id}`);
    }
  }, [blog.id, deleteStatus, setBlogs]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (e) => {
    e.preventDefault();
    handleShow();
  };
  return (
    <Col as="li" xxl={3} xl={4} lg={4} md={6} sm={12} className="mt-4">
      <Link to={`/blogs/${blog.id}`}>
        <Card className="single-blog">
          <Card.Img variant="top" src={blog.img} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Subtitle>{date + " " + blog.author}</Card.Subtitle>
            <Card.Text>{blog.description}</Card.Text>
            <ButtonGroup
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button style={{ margin: "0px 5px" }} variant="primary">
                <Link to={`/blogs/${blog.id}`}>Read More</Link>
              </Button>
              <Button style={{ margin: "0px 5px" }} variant="warning">
                <Link to={`/blogs/${blog.id}/edit`} state={{ blog }}>
                  Edit
                </Link>
              </Button>
              <Button
                style={{ margin: "0px 5px" }}
                variant="danger"
                onClick={(e) => handleDelete(e)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              setDeleteStatus(true);
              handleClose();
            }}
          >
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}

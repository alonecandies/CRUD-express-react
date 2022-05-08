import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SingleRecentBlog({ blog, setBlogs }) {
  const formatedDate = blog ? new Date(blog.updatedAt) : null;
  const month = formatedDate.getUTCMonth() + 1;
  const day = formatedDate.getUTCDate();
  const year = formatedDate.getUTCFullYear();
  const date = day + "." + month + "." + year;
  return (
    <Col as="li" xxl={12} xl={12} lg={12} md={12} sm={12} className="mt-4">
      <Link to={`/blogs/${blog.id}`} className="recent-blog">
        <div className="recent-blog-image">
          <img src={blog.img} alt={blog.description}></img>
        </div>
        <div className="recent-blog-detail">
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle>{date + " " + blog.author}</Card.Subtitle>
          <Card.Text>{blog.description}</Card.Text>
          <Button style={{ margin: "0px 5px" }} variant="primary">
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
          </Button>
        </div>
      </Link>
    </Col>
  );
}

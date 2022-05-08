import { Row } from "react-bootstrap";
import SingleRecentBlog from "./SingleRecentBlog";

export default function ListBlogs({ blogs, setBlogs }) {
  return (
    <Row as="ul">
      {blogs.map((blog) => (
        <SingleRecentBlog key={blog.id} blog={blog} setBlogs={setBlogs} />
      ))}
    </Row>
  );
}

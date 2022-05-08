import { Row } from "react-bootstrap";
import SingleBlog from "./SingleBlog";

export default function ListBlogs({ blogs,setBlogs }) {
  return (
    <Row as="ul">
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} blog={blog} setBlogs={setBlogs}/>
      ))}
    </Row>
  );
}

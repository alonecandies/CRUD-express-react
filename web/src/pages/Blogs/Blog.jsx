import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { FaFacebook,FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Blog() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const formatedDate = blog ? new Date(blog.updatedAt) : null;
  const month = formatedDate.getUTCMonth() + 1;
  const day = formatedDate.getUTCDate();
  const year = formatedDate.getUTCFullYear();
  const date = day + "." + month + "." + year;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:4000/posts/${id}`
        );
        setBlog(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {loading && (
        <Spinner className="loading" animation="border" variant="info" />
      )}
      {!loading && (
        <div className="mt-3 blog">
          <h1 className="blog-title">{blog.title}</h1>
          <span className="blog-author">
            {blog ? <>{date}</> : <></>} | By {blog.author}
          </span>
          <div class="social-menu">
            <div>
              <a href="">
                <FaTwitter />
              </a>
            </div>
            <div>
              <a href="">
                <FaFacebook />
              </a>
            </div>
            <div>
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div>
              <a href="">
                <FaYoutube /> 
              </a>
            </div>
          </div>
          <div className="blog-image">
            <img src={blog.img} alt={blog.description} />
          </div>
          <p className="blog-content">{blog.content}</p>
        </div>
      )}
    </>
  );
}

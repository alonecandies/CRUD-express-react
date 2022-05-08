import { useEffect, useState } from "react";
import axios from "axios";
import ListBlogs from "../../components/ListBlogs";
import { Spinner } from "react-bootstrap";

export default function AllBlog() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:4000/posts"
        );
        setBlogs(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <Spinner className="loading" animation="border" variant="info" />
      )}
      {!loading && (
        <div>
          <h1 className="text-center mt-3">Blogs List</h1>
          <p className="text-center mt-3 home-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
          <ListBlogs blogs={blogs} setBlogs={setBlogs} />
        </div>
      )}
    </>
  );
}

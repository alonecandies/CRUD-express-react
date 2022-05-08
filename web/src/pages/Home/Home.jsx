import { useEffect, useState } from "react";
import axios from "axios";
import ListRecentBlogs from "../../components/ListRecentBlogs";
import { Spinner } from "react-bootstrap";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:4000/posts"
        );
        console.log(response)
        setBlogs(response.slice(0, 5));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && (
        <Spinner className="loading" animation="border" variant="info" />
      )}
      {!loading && (
        <div>
          <h1 className="text-center mt-3">Recent blogs</h1>
          <p className="text-center mt-3 home-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
          <ListRecentBlogs blogs={blogs} setBlogs={setBlogs} />
        </div>
      )}
    </div>
  );
}

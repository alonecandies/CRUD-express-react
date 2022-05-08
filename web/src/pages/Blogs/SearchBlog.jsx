import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ListRecentBlogs from "../../components/ListRecentBlogs"

export default function Blog() {
  const { title } = useParams();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      setBlogs([])
     const fetchData = async () => {
       setLoading(true);
       try {
         const { data: response } = await axios.get(
           "http://localhost:4000/posts/search/" + title
         );
         setBlogs(response);
       } catch (error) {
         console.error(error.message);
       }
       setLoading(false);
     };

     fetchData();
   }, [title]);

  return (
    <div>
      {loading && (
        <Spinner className="loading" animation="border" variant="info" />
      )}
      {!loading && (
        <div>
          <h1 className="text-center mt-3">Blogs with title {title}</h1>
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

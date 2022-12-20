import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row } from "react-bootstrap";
import Post from "../components/Post";

import axios from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await axios.get(apiEndpoint);

      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <>
      <h2>
        Todos los posts <Link to="create">Nuevo Post</Link>
      </h2>
      <Row xs={1} md={2} className="g-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Row>
    </>
  );
};

export default Posts;

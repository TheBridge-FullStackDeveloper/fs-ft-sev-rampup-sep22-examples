import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Post from "../components/Post";

import axios from "axios";

const apiEndpoint = `https://jsonplaceholder.typicode.com/posts/`;

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const hadleDeletePost = async (post) => {
    const oldPosts = [...posts];

    const newPosts = posts.filter((p) => p !== post);

    // Enfoque optimista, primero refresco la UI despues intento hacer los cmabios. Si se produce error, restauro la interface de usuario con los cambios anteriores.
    setPosts(newPosts);

    try {
      await axios.delete(apiEndpoint + post.id);
      throw new Error("VAMOS");
    } catch (err) {
      setPosts(oldPosts);
    }

    // enfoque pesimista, primero actualiza la base de datos después el estado
    // await axios.delete(apiEndpoint + post.id);
    //  setPosts(newPosts);
    //
  };

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
        Todos los posts <Link to="/new-post">Nuevo Post</Link>
      </h2>
      <Row xs={1} md={2} className="g-4">
        {posts.map((post) => (
          <Post
            key={post.id}
            onDelete={() => hadleDeletePost(post)}
            {...post}
          />
        ))}
      </Row>
    </>
  );
};

export default Posts;

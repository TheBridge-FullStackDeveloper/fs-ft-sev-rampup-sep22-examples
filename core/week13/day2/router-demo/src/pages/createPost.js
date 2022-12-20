import { useEffect, useState } from "react";

import axios from "axios";
import PostForm from "../components/PostForm";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [post, setPost] = useState({});

  return (
    <>
      <h2>Crear nuevo Post</h2>
      <PostForm />
    </>
  );
};

export default Posts;

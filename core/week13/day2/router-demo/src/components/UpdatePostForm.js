import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import axios from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts/";

const PostForm = ({ postId }) => {
  console.log(apiEndpoint + postId);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    async function getPost() {
      const { data } = await axios.get(apiEndpoint + postId);

      setTitle(data.title);
      setBody(data.body);
    }
    getPost();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) return alert("Faltan datos");

    const updatedPost = {
      title,
      body,
    };

    const { data } = await axios.put(apiEndpoint + postId, updatedPost);

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Título</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="exampleFormControlInput1"
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Cuerpo</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="3"
        ></textarea>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PostForm;

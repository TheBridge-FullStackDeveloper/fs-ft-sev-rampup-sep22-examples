import { useState } from "react";

import Button from "react-bootstrap/Button";

import axios from "axios";

const apiEndpoint = "htt://jsonplaceholder.typicode.com/posts";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) return alert("Faltan datos");

    const newPost = {
      userId: 1,
      title,
      body,
    };

    try {
      const { data } = await axios.post(apiEndpoint, newPost);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

const apiEndpoint = `https://jsonplaceholder.typicode.com/comments?postId=`;

const Comments = () => {
  const [comments, setComments] = useState([]);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    async function getComments() {
      const { data: comments } = await axios.get(
        apiEndpoint + searchParams.get("postId")
      );

      setComments(comments);
    }
    getComments();
  }, []);

  return (
    <>
      <h2>Comentarios</h2>
      {comments.map((comment) => (
        <h3 key={comment.id}>{comment.email}</h3>
      ))}
    </>
  );
};

export default Comments;

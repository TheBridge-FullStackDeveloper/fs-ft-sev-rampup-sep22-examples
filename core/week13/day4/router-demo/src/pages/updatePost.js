import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UpdatePostForm from "../components/UpdatePostForm";

const Posts = (props) => {
  let { postId } = useParams();

  return (
    <>
      <h2>Actualiza el Post #{postId}</h2>
      <UpdatePostForm postId={postId} />
    </>
  );
};

export default Posts;

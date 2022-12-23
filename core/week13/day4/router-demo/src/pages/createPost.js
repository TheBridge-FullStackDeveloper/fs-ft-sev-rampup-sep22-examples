import { useEffect, useState } from "react";

import CreatePostForm from "../components/CreatePostForm";

const Posts = () => {
  return (
    <>
      <h2>Crear nuevo Post</h2>
      <CreatePostForm />
    </>
  );
};

export default Posts;

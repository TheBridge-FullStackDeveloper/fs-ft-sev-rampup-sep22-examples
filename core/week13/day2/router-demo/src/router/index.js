import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

import Posts from "../pages/Posts";
import CreatePost from "../pages/createPost";
import UpdatePost from "../pages/updatePost";
import Comments from "../pages/Comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,

    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:postId",
        element: <UpdatePost />,
      },
      {
        path: "/new-post",
        element: <CreatePost />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>contact</h1>,
      },
    ],
  },
]);

export default router;

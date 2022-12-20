import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

import Posts from "../pages/Posts";
import CreatePost from "../pages/createPost";

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
        path: "/posts/create",
        element: <CreatePost />,
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

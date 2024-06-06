import { Root } from "../pages/Root/Root";
import { SignUp } from "../pages/SignUp/SignUp";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { PostWrapper } from "../pages/PostWrapper/PostWrapper";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "search",
        element: <Dashboard />,
      },
      {
        path: "posts",
        element: <Dashboard />,
      },
      {
        path: "posts/:postId",
        element: <PostWrapper />,
      },
    ],
  },
];

export default routes;

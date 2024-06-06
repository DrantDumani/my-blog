import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { SignUp } from "./pages/SignUp/SignUp";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import { PostWrapper } from "./pages/PostWrapper/PostWrapper";
import { login, signUp } from "./utils/actions";
import { getPosts } from "./utils/loaders";
import { NoAuth } from "./components/NoAuth/NoAuth";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const authContext = useAuthContext();
  const routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          element: <NoAuth />,
          children: [
            {
              path: "/login",
              element: <Login />,
              action: login(authContext),
            },
            {
              path: "/signup",
              element: <SignUp />,
              action: signUp(authContext),
            },
          ],
        },

        {
          path: "/",
          element: <Home />,
          loader: getPosts,
        },
        {
          path: "search",
          element: <Search />,
          loader: getPosts,
        },
        {
          path: "posts",
          element: <PostWrapper />,
          loader: getPosts,
        },
        {
          path: "posts/:postId",
          element: <PostWrapper />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;

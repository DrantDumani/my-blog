import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { SignUp } from "./pages/SignUp/SignUp";
import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { PostWrapper } from "./pages/PostWrapper/PostWrapper";
import { signUp } from "./utils/actions";
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

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;

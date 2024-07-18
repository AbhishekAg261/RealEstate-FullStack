import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./layouts/layout";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import SinglePage from "./pages/SinglePage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfileUpdate from "./pages/ProfileUpdate";
import NewPostPage from "./pages/NewPostPage";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/single/:id",
          element: <SinglePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

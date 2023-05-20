import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Authentication from "./provider/Authentication";
import Addtoy from "./routes/Addtoy";
import App from "./routes/App.jsx";
import { Login, Register } from "./routes/Authenticate";
import Blog from "./routes/Blog";
import Collection from "./routes/Collection";
import ErrorPage from "./routes/ErrorPage";
import Private from "./routes/Private.jsx";
import Root from "./routes/root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/addtoys",
        element: (
          <Private>
            <Addtoy />
          </Private>
        ),
      },
      {
        path: "/collection",
        element: (
          <Private>
            <Collection />
          </Private>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router} />
    </Authentication>
  </React.StrictMode>
);

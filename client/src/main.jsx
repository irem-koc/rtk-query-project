import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AddVideo from "./pages/addVideo/AddVideo";
import EditVideo from "./pages/edit/EditVideo";
import Home from "./pages/home/Home";
import SingleVideo from "./pages/singleVideo/SingleVideo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos/:id",
        element: <SingleVideo />,
      },
      {
        path: "/videos/add",
        element: <AddVideo />,
      },
      {
        path: "/videos/edit/:id",
        element: <EditVideo />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

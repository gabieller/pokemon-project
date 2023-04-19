import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./redux/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Details from "./routes/Details";
import "./index.css";
import Pokedex from "./components/Pokedex";
import Favorites from "./routes/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Pokedex />,
      },

      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />,
    </Provider>
  </React.StrictMode>
);

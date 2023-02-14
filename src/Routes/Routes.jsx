import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Cart from "../pages/Cart/Cart";

import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

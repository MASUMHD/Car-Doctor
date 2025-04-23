import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../../Components/Share/Root";
import Home from "../../Components/Pages/Home/Home";

    export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <h1>404</h1>,
      children: [
          {
              path: "/",
              element: <Home/>
          }
      ]
    },
  ]);
  
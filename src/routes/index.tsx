import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Trending from "../pages/Trending";
import PlayingNow from "../pages/PlayingNow";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/trending",
          element: <Trending />,
        },
        {
          path: "/playing-now",
          element: <PlayingNow />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);
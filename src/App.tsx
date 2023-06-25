import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Newsletter,
  Cocktail,
  Error,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
        loader: landingLoader,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
        loader: landingLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

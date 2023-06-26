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
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import SinglePageError from "./pages/SinglePageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

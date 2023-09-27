import { createBrowserRouter, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import Edit from "../pages/Edit/Edit";
import Details from "../pages/Details/Details";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/details",
    element: <Details></Details>,
  },
  {
    path: "/edit",
    element: <Edit></Edit>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;

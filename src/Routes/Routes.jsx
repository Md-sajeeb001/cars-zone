import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import AddCars from "../Pages/AddCars";
import UpDateCars from "../Pages/UpDateCars";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PrivateRoute from "../Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/cars"),
      },
      {
        path: "/addcars",
        element: (
          <PrivateRoute>
            <AddCars></AddCars>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatedcars/:id",
        element: (
          <PrivateRoute>
            <UpDateCars></UpDateCars>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;

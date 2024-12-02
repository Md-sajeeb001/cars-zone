import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import AddCars from "../Pages/AddCars";
import UpDateCars from "../Pages/UpDateCars";
import SignUp from "../Pages/SignUp";
import About from "../Components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        // path: "",
        index: true,
        element: <About></About>,
        // loader: () => fetch("http://localhost:5000/cars"),
      },
      {
        path: "/addcars",
        element: <AddCars></AddCars>,
      },
      {
        path: "/updatedcars/:id",
        element: <UpDateCars></UpDateCars>,
        loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;

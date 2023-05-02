import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../../Layout/MainPage";
import Home from "../../Home/Home";
import Courses from "../../Courses/Courses";
import LogIn from "../../LogIn/LogIn";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: async () => {
          return fetch("http://localhost:5000/courses");
        },
      },
     
    ],
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

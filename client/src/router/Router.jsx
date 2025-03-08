import {
    createBrowserRouter
  } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/home",
      element: <Homepage/>,
    },
    {
      path: "/register",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]);

  export default router
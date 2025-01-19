import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Biodata from "../pages/Biodata/Biodata/Biodata";
import BiodataPage from "../pages/Biodata/BiodataPage/BiodataPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Components/DashBoard/DashBoard";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },

        {
          path:'/biodata',
          element:<BiodataPage></BiodataPage>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'dashboard',
          element:<PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>
        }
      ]
    },


    
  ]);
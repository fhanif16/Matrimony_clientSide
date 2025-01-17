import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Biodata from "../pages/Biodata/Biodata/Biodata";
import BiodataPage from "../pages/Biodata/BiodataPage/BiodataPage";


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
        }
      ]
    },


    
  ]);
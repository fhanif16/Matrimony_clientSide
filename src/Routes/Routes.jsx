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
import BiodataDetails from "../pages/Biodata/BiodataDetails/BiodataDetails";


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
        },

        {
          path: '/biodata/:id',
          element: <PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>,
          loader: async ({ params }) => {
              const response = await fetch('http://localhost:5000/biodata');
              const data = await response.json();
              const currentBiodata = data.find(item => item.id === parseInt(params.id));
              const similarBiodata = data.filter(item => 
                  item.id !== parseInt(params.id) && 
                  item.biodataType === currentBiodata.biodataType // Match criteria
              ).slice(0, 3); // Limit to 3 similar biodata
              return { currentBiodata, similarBiodata };
          }, }


      

















      ]
    },


    
  ]);
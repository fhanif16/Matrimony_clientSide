import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import BiodataPage from "../pages/Biodata/BiodataPage/BiodataPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BiodataDetails from "../pages/Biodata/BiodataDetails/BiodataDetails";


import Dashboard from "../pages/DashBoard/Dashboard/Dashboard";
import CreateBiodata from "../pages/DashBoard/CreateBiodata/CreateBiodata";
import EditBiodata from "../pages/DashBoard/EditBiodata/EditBiodata";
import ViewBiodata from "../pages/DashBoard/ViewBiodata/ViewBiodata";
import FavouriteBiodata from "../pages/DashBoard/FavouriteBiodata/FavouriteBiodata";
import AboutUs from "../pages/Aboutus/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import WriteReviews from "../pages/WriteReviews/WriteReviews";
import AdminDashboard from "../pages/DashBoard/AdminDashboard/AdminDashboard";
import SuccessStory from "../pages/DashBoard/SuccessStory/SuccessStory";
import ManageUser from "../pages/DashBoard/ManageUsers/ManageUser";
import ApprovedPremium from "../pages/DashBoard/ApprovedPremium/ApprovedPremium";
import ContactEdRequest from "../pages/DashBoard/ContactRequest/ContactEdRequest";
import ApporvedContactRequest from "../pages/DashBoard/ApprovedContactRequest/ApporvedContactRequest";
import Payment from "../pages/DashBoard/Payment/Payment";
import Checkout from "../pages/DashBoard/Checkout/Checkout";
import Userinfo from "../pages/DashBoard/UserInfo/Userinfo";
import AdminInfo from "../pages/DashBoard/AdminInfo/AdminInfo";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "biodata",
        element: <BiodataPage></BiodataPage>,
      },


      {
        path: "aboutus",
        element: <AboutUs></AboutUs>
      },

      {
        path: "contactus",
        element: <ContactUs></ContactUs>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },

      {
        path: '/checkout/:id',
        element: <PrivateRoute>
        <Checkout></Checkout>
        </PrivateRoute>,
       loader: ({ params }) => fetch(`https://matrimony-platform-server.vercel.app/biodata/${params.id}`)
       },





     
      {
        path: "biodata/:id",
        element: <PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch('https://matrimony-platform-server.vercel.app/biodata');
          const data = await response.json();
          const currentBiodata = data.find(item => item.bioId === parseInt(params.id));
          if (!currentBiodata) throw new Error("Biodata not found");

          const similarBiodata = data
            .filter(
              item =>
                item.bioId !== parseInt(params.id) &&
                item.biodataType === currentBiodata.biodataType
            )
            .slice(0, 3);

          return { currentBiodata, similarBiodata };
        },
      },
    ],
  },
  {
    path: "dashboard",
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
     

      {
        path: "createbiodata",
        element:<PrivateRoute><CreateBiodata></CreateBiodata></PrivateRoute>
      },

      {
        path: "writereviews",
        element:<PrivateRoute><WriteReviews></WriteReviews> </PrivateRoute>
      },
    

      // {
      //   path:'editbiodata/:id',
      //   element:<PrivateRoute><EditBiodata></EditBiodata></PrivateRoute>,
      //   loader: async ({ params }) => {
      //     try {
      //       const response = await fetch(
      //         `https://matrimony-platform-server.vercel.app/biodata/${params.id}`
      //       );
      //       if (!response.ok) {
      //         throw new Error("Failed to fetch biodata for editing");
      //       }
      //       const biodata = await response.json();
      //       return biodata;
      //     } catch (error) {
      //       console.error("Error loading biodata for editing:", error);
      //       throw error;
      //     }
      //   },

      // }

      {
        path: "viewbiodata/editbiodata/:id",
        element: <PrivateRoute><EditBiodata></EditBiodata></PrivateRoute>,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://matrimony-platform-server.vercel.app/biodata/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch biodata for editing");
            }
            const biodata = await response.json();
            return biodata;
          } catch (error) {
            console.error("Error loading biodata for editing:", error);
            throw error;
          }
        },
      },





      {
        path: "viewbiodata",
        element:<PrivateRoute><ViewBiodata></ViewBiodata></PrivateRoute>
      },


      {
        path: "favbiodata",
        element:<PrivateRoute><FavouriteBiodata></FavouriteBiodata></PrivateRoute>
      },

      {
        path:'contactRequest',
        element:<PrivateRoute><ContactEdRequest></ContactEdRequest></PrivateRoute>

      },

      {
        path:'adminDashboard',
        element:<PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>
      },
      {
        path:'sucessStories',
        element:<PrivateRoute><SuccessStory></SuccessStory></PrivateRoute>
      },
      {
        path:'manageUsers',
        element:<PrivateRoute><ManageUser></ManageUser></PrivateRoute>
      },
      {
        path:'approvePremium',
        element:<PrivateRoute><ApprovedPremium></ApprovedPremium></PrivateRoute>
       
      }
      ,{
        path:'approvedContact',
        element:<PrivateRoute><ApporvedContactRequest></ApporvedContactRequest></PrivateRoute>
      },

      {
        path: "usertype/:type",
        element:<PrivateRoute><Userinfo></Userinfo> </PrivateRoute>
      },


     
    
    
      
    ],
  },
]);

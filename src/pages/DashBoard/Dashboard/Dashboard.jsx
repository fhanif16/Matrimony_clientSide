import { Button, Sidebar } from "flowbite-react";
import React, { useContext } from "react";
import { HiChartPie, HiInbox, HiViewBoards } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import DashboardNav from "../../Shared/NavBar/DashboardNav";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Logged Out!", "You have been logged out successfully.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", "An error occurred during logout. Please try again.", "error");
          });
      }
    });
  };

  return (
    <div>
      <DashboardNav />
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Sidebar aria-label="Dashboard Sidebar">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item icon={HiChartPie}>
                  <NavLink
                    to="createbiodata"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-bold" : ""
                    }
                  >
                    Create BioData
                  </NavLink>
                </Sidebar.Item>
                {/* <Sidebar.Item icon={HiChartPie}>
                  <NavLink to='editbiodata'
                  // to={`editbiodata/${id}`}
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-bold" : ""
                    }
                  >
                    Edit BioData
                  </NavLink>
                </Sidebar.Item> */}
                <Sidebar.Item icon={HiChartPie}>
                  <NavLink
                    to="viewbiodata"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-bold" : ""
                    }
                  >
                    View BioData
                  </NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={HiViewBoards}>
                  <NavLink
                    to="favbiodata"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-bold" : ""
                    }
                  >
                    Favourite BioData
                  </NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={HiInbox}>
                  <NavLink
                    to="contactRequest"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500 font-bold" : ""
                    }
                  >
                    Contact Request
                  </NavLink>
                </Sidebar.Item>
                <Sidebar.Item icon={HiChartPie}>
                  <Button
                    className="w-full text-left"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

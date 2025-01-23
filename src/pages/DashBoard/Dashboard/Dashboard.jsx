import { Button, Sidebar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { HiChartPie, HiInbox, HiViewBoards } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import DashboardNav from "../../Shared/NavBar/DashboardNav";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (user?.email) {
      console.log(`Fetching role for email: ${user.email}`);

      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log("Fetch failed with status:", res.status);
            return null;
          }
        })
        .then((data) => {
          if (data) {
            console.log("Fetched user role:", data);
            setUserRole(data.role);
          } else {
            console.log("No data received");
          }
        })
        .catch((error) => {
          console.log("Fetch error:", error.message);
        });
    }
  }, [user]);

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
                {userRole === "admin" ? (
                  <>








                    <h2 className="text-lg font-bold mb-4 text-center">Admin Dashboard</h2>
                   
                    <Sidebar.Item icon={HiChartPie}>
                      <NavLink
                        to="adminDashboard"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500 font-bold" : ""
                        }
                      >
                        Admin Dashboard
                      </NavLink>
                    </Sidebar.Item>


                    <Sidebar.Item icon={HiChartPie}>
                      <NavLink
                        to="sucessStories"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500 font-bold" : ""
                        }
                      >
                        Success Stoires
                      </NavLink>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiViewBoards}>
                      <NavLink
                        to="manageUsers"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500 font-bold" : ""
                        }
                      >
                        Manage Users
                      </NavLink>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiInbox}>
                      <NavLink
                        to="approvePremium"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500 font-bold" : ""
                        }
                      >
                        Approved Premium
                      </NavLink>
                    </Sidebar.Item>


                    <Sidebar.Item icon={HiInbox}>
                      <NavLink
                        to="approvedContact"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500 font-bold" : ""
                        }
                      >
                        Approved Contact Request
                      </NavLink>
                    </Sidebar.Item>

                  
                  </>
                ) : (
                  <>
                    <h2 className="text-lg font-bold mb-4 text-center">User Dashboard</h2>


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
                        Faviourite Biodata
                      </NavLink>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiInbox}>
                      <NavLink
                        to="writereviews"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500 font-bold" : ""
                        }
                      >
                        Write Reviews
                      </NavLink>
                    </Sidebar.Item>

                    <Sidebar.Item icon={HiInbox}>
                      <NavLink
                        to="contactRequest"
                        className={({ isActive }) =>
                          isActive ? "text-blue-500 font-bold" : ""
                        }
                      >
                        My Contact Request
                      </NavLink>
                    </Sidebar.Item>
                  </>
                )}
                <Sidebar.Item>
                  <Button className="w-full text-left" onClick={handleLogout}>
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

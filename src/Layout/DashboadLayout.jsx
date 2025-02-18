import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../pages/Shared/NavBar/DashboardNav';

const DashboadLayout = () => {
    const { user, logOut } = useContext(AuthContext);
    
        const handleLogout = () => {
            logOut()
                .then(() => {
                    console.log('User logged out');
                })
                .catch(error => {
                    console.error('Logout error:', error);
                });
        };

    return (
        <div className='mt-10'>

            <div>
            <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>

        <Sidebar.Item  icon={HiChartPie}>
           <Link to ='/createbiodata'> Create BioData </Link>
          </Sidebar.Item>
          <Sidebar.Item  icon={HiChartPie}>
           <Link to ='/editbiodata'>Edit BioData </Link>
          </Sidebar.Item>
          <Sidebar.Item  icon={HiChartPie}>
           <Link to ='/viewbiodata'>View Biodata </Link>
          </Sidebar.Item>
          
          <Sidebar.Item href="#" icon={HiViewBoards} label="" labelColor="dark">
          <Link to ='/favbiodata'> Favourite BioData </Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="">
          <Link to ='/contactRequest'> Contact Request </Link>
          </Sidebar.Item>

          <Sidebar.Item  icon={HiChartPie}>
           <Button onClick={handleLogout}>Logout</Button>
          </Sidebar.Item>
        
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
            </div>

        
            
        </div>
    );
};



export default DashboadLayout;
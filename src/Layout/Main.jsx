import React from 'react';
import { Outlet } from 'react-router-dom';

import PageFooter from '../pages/Shared/Footer/PageFooter';
import PageNavBar from '../pages/Shared/NavBar/PageNavBar';

const Main = () => {
    return (
        <div>

            <PageNavBar></PageNavBar>

            <Outlet></Outlet>
           <PageFooter></PageFooter>
            
        </div>
    );
};

export default Main;
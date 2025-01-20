import React from 'react';

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';

import pic from '../../../assets/logo.jpg';

const DashboardNav = () => {
    const navOptions = (
        <Navbar.Collapse>
            <Navbar.Link as={Link} to='/'>Home</Navbar.Link>
            
        </Navbar.Collapse>
    );
    return (
        <div className="sticky z-50 top-0 bg-opacity-30 bg-black">
        <Navbar className="fluid rounded">
            <Navbar.Brand href="/">
                <img className="rounded-full w-20" src={pic} alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-6">
                    Better Half
                </span>
            </Navbar.Brand>
          
        </Navbar>
    </div>
    );
};

export default DashboardNav;

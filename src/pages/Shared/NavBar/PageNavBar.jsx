import React from 'react';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import pic from '../../../assets/logo.jpg'
import { Link } from 'react-router-dom';

const PageNavBar = () => {

    const navOptions = <>

<Navbar.Collapse>
        <Navbar.Link as={Link} to='/' >
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to='/biodata'>Biodatas</Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
        <Navbar.Link href="#">Contact Us</Navbar.Link>
        <Navbar.Link as={Link} to='/login'>Login</Navbar.Link>
        
        
      </Navbar.Collapse>
    </>
    return (

        <div className=' sticky  z-50 top-0 bg-opacity-30 bg-black'>



<Navbar className='fluid rounded ' >
      <Navbar.Brand href="https://flowbite-react.com">
        <img className='rounded-full w-20' src={pic} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-6">Better Half</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
     {
        navOptions
     }
    </Navbar>
        </div>
       
  );
}

export default PageNavBar;
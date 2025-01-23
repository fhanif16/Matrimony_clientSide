import React, { useContext } from 'react';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import pic from '../../../assets/logo.jpg';

const PageNavBar = () => {
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

    const navOptions = (
        <Navbar.Collapse>
            <Navbar.Link as={Link} to='/'>Home</Navbar.Link>
            <Navbar.Link as={Link} to='/biodata'>Biodatas</Navbar.Link>
            <Navbar.Link href="/aboutus">About Us</Navbar.Link>
            <Navbar.Link href="/contactus">Contact Us</Navbar.Link>
            {!user && <Navbar.Link as={Link} to='/login'>Login</Navbar.Link>}
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
                <div className="flex md:order-2">
                    {user ? (
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar
                                    alt="User settings"
                                    img={user.photoURL || 'https://via.placeholder.com/150'}
                                    rounded
                                />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{user.displayName || 'User'}</span>
                                <span className="block truncate text-sm font-medium">{user.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item as={Link} to="/dashboard">Dashboard</Dropdown.Item>


                            

                            <Dropdown.Item as={Link} to="dashboard/writereviews">Write Reviews</Dropdown.Item>
                            <Dropdown.Divider />

                            <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                        </Dropdown>
                    ) : (
                        <Avatar alt="Default avatar" img="https://via.placeholder.com/150" rounded />
                    )}
                    <Navbar.Toggle />
                </div>
                {navOptions}
            </Navbar>
        </div>
    );
};

export default PageNavBar;

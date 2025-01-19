import React from 'react';
import login from '../../assets/login.jpg'
import { useContext } from "react";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white rounded-lg shadow-lg max-w-4xl w-full">
          <div className="p-8 lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">Sign up now!</h1>
            <div>
                <img src={login} alt="" srcset="" />
            </div>
          </div>
          <div className="p-8 lg:w-1/2 w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
              </div>
              <div>
                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.photoURL && <span className="text-red-600 text-sm">Photo URL is required</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {errors.password?.type === "required" && <p className="text-red-600 text-sm">Password is required</p>}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 text-sm">Password must be at least 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 text-sm">Password must be less than 20 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 text-sm">
                    Password must include uppercase, lowercase, number, and special character.
                  </p>
                )}
                <a href="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                  Forgot password?
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    );
};

export default Register;

import React, { useContext } from 'react';
import login from '../../assets/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

import { auth } from '../../firebase/firebase.config';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn, signInWithGoogle} = useContext(AuthContext)
    // const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || "/";
    const saveUserToDB = async (email) => {
      console.log('Saving user to DB:', email); 
      const response = await fetch('https://matrimony-platform-server.vercel.app/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, role: 'user', member: 'normal' }),
      });
      const data = await response.json();
      console.log('Response from server:', data); 
      };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
              
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }


    const handleGoogleLogin = () => {
        // signInWithPopup(auth, googleProvider )
        signInWithGoogle()
            .then((result) => {
              saveUserToDB(result.user.email)
              //  console.log(result.user);
                Swal.fire({
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    icon: 'success',
                });
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });


            
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white rounded-lg shadow-lg max-w-4xl w-full">
          <div className="p-8 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Login now!</h1>
           
            <div className='w[80%]'>
                <img src={login} alt="" srcset="" />
            </div>
          </div>
          <div className="p-8 lg:w-1/2 w-full">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="passoword"
                  placeholder="password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <a href="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                  Forgot password?
                </a>
              </div>
              <div>
               
                <input className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit" value="Login"  />
              </div>
            </form>
            <p><small>New Here? <Link to="/register">Create an account</Link> </small></p>

            <div className="text-center mt-4">
                        <button
                           onClick={handleGoogleLogin}
                            className="btn btn-primary w-full"
                        >
                            Login with Google
                        </button>
                    </div>
          </div>
        </div>
      </div>
      
    );
};

export default Login;

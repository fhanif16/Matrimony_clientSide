import React from 'react';
import { Slide } from 'react-awesome-reveal';
import signUp from "../../../assets/sign.png";
import connect from "../../../assets/connection.png";
import interact from "../../../assets/interact.png";

const HowItWorks = () => {
  return (
    <div className="text-center mt-10">
      <p className="text-3xl font-semibold mb-6">Find Your Better Half</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Slide direction="left">
          <div className="group">
            <img
              src={signUp}
              alt="Sign Up"
              className="w-20 mx-auto transition-transform duration-300 group-hover:scale-110"
            />
            <h1 className="text-xl font-bold mt-4">Sign Up</h1>
            <p className="text-gray-600 mt-2">Register for free & put up your profile</p>
          </div>
        </Slide>

        <Slide direction="up">
          <div className="group">
            <img
              src={connect}
              alt="Connect"
              className="w-20 mx-auto transition-transform duration-300 group-hover:scale-110"
            />
            <h1 className="text-xl font-bold mt-4">Connect</h1>
            <p className="text-gray-600 mt-2">Select & connect with matches you like</p>
          </div>
        </Slide>

        <Slide direction="right">
          <div className="group">
            <img
              src={interact}
              alt="Interact"
              className="w-20 mx-auto transition-transform duration-300 group-hover:scale-110"
            />
            <h1 className="text-xl font-bold mt-4">Interact</h1>
            <p className="text-gray-600 mt-2">Connect and start your conversation</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default HowItWorks;

import React from "react";
import banner from "../../assets/Banner.jpg";
import banner2 from "../../assets/Banner2.jpg";
import banner3 from "../../assets/Banner3.jpg";
import { Button, Carousel, Label, Select } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
  const ageRanges = [
    "20-25",
    "26-30",
    "31-35",
    "36-40",
    "41-45",
    "46-50",
    "51-55",
    "56-60",
    "61-65",
  ];

  return (
    <div className="relative">
   
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
          ></div>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>
        </Carousel>
      </div>

     
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 text-center text-white max-w-2xl w-full px-4">
          <p className="mb-8 text-2xl sm:text-3xl font-bold">
            The No. 1 Matchmaking Service Worldwide
            
          </p>

          <div className="bg-black bg-opacity-80 p-6 rounded-md shadow-lg">
           
            <p>Choose your partner and be a part of our successful journey</p>
          

            
           {
            <Link to='/biodata'>  <Button gradientMonochrome="info"
            type="submit"
            
            className="w-full font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
           SEARCH
          </Button></Link>
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

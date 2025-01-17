import React from "react";
import banner from "../../assets/Banner.jpg";
import banner2 from "../../assets/Banner2.jpg";
import banner3 from "../../assets/Banner3.jpg";
import { Button, Carousel, Label, Select } from "flowbite-react";

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
      {/* Banner Carousel */}
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

      {/* Form Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 text-center text-white max-w-2xl w-full px-4">
          <p className="mb-8 text-2xl sm:text-3xl font-bold">
            The No. 1 Matchmaking Service Worldwide
          </p>

          <div className="bg-black bg-opacity-60 p-6 rounded-md shadow-lg">
            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {/* Gender Field */}
              <div>
                <Label
                  htmlFor="gender"
                  value="Gender"
                  className="text-white font-medium mb-1"
                />
                <Select id="gender" required aria-label="Gender">
                  <option>Man</option>
                  <option>Woman</option>
                </Select>
              </div>

             
              <div>
                <Label
                  htmlFor="age-range"
                  value="Age Range"
                  className="text-white font-medium mb-1"
                />
                <Select id="age-from" required aria-label="Age From">
                  {ageRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </Select>
              </div>

          

              {/* Division Field */}
              <div>
                <Label
                  htmlFor="division"
                  value="Select Division"
                  className="text-white font-medium mb-1"
                />
                <Select id="division" required aria-label="Select Division">
                  <option>Dhaka</option>
                  <option>Chattagram</option>
                  <option>Rangpur</option>
                  <option>Barishal</option>
                  <option>Khulna</option>
                  <option>Mymensingh</option>
                  <option>Sylhet</option>
                </Select>
              </div>
            </div>

            
            <Button gradientMonochrome="info"
              type="submit"
              className="w-full font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
             SEARCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

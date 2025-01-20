import React, { useEffect, useState } from "react";
import AllBiodataCard from "../AllBiodataCard/AllBiodataCard";
import { Label, Select, Sidebar, Button } from "flowbite-react";

const AllBioData = () => {
  const [biodata, setBiodata] = useState([]);
  const [filters, setFilters] = useState({
    gender: "",
    age: "",
    division: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/biodata")
      .then((res) => res.json())
      .then((data) => {
        setBiodata(data);
        setFilteredData(data);
      });
  }, []);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleFilter = () => {
  //   const filtered = biodata.filter((item) => {
  //     const genderMatch = filters.gender
  //       ? item.biodataType.toLowerCase() === filters.gender.toLowerCase()
  //       : true;

  //     const ageMatch = filters.age
  //       ? ageRanges.some((range) => {
  //           const [minAge, maxAge] = range.split("-").map(Number);
  //           return item.age >= minAge && item.age <= maxAge;
  //         })
  //       : true;

  //     const divisionMatch = filters.division
  //       ? item.permanentDivisionname.toLowerCase() === filters.division.toLowerCase()
  //       : true;

  //     return genderMatch && ageMatch && divisionMatch;
  //   });

  //   setFilteredData(filtered);
  // };
  const handleFilter = () => {
    const filtered = biodata.filter((item) => {
    
      const genderMatch = filters.gender
        ? item.biodataType && item.biodataType.toLowerCase() === filters.gender.toLowerCase()
        : true;
  
     
      const ageMatch = filters.age
        ? ageRanges.some((range) => {
            const [minAge, maxAge] = range.split("-").map(Number);
            return item.age >= minAge && item.age <= maxAge;
          })
        : true;
  
      
      const divisionMatch = filters.division
        ? item.permanentDivisionname && item.permanentDivisionname.toLowerCase() === filters.division.toLowerCase()
        : true;
  
      return genderMatch && ageMatch && divisionMatch;
    });
  
    setFilteredData(filtered);
  };
  const handleReset = () => {
  
    setFilters({
      gender: "",
      age: "",
      division: "",
    });
    setFilteredData(biodata); 
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <Sidebar aria-label="Filter Sidebar">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <Label htmlFor="gender" value="Gender" />
                <Select
                  id="gender"
                  name="gender"
                  value={filters.gender}
                  onChange={handleChange}
                >
                  <option value="">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </Sidebar.Item>
              <Sidebar.Item>
                <Label htmlFor="age" value="Age Range" />
                <Select
                  id="age"
                  name="age"
                  value={filters.age}
                  onChange={handleChange}
                >
                  <option value="">All</option>
                  {ageRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </Select>
              </Sidebar.Item>
              <Sidebar.Item>
                <Label htmlFor="division" value="Division" />
                <Select
                  id="division"
                  name="division"
                  value={filters.division}
                  onChange={handleChange}
                >
                  <option value="">All</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattagram">Chattagram</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="barisal">Barisal</option>
                  <option value="khulna">Khulna</option>
                  <option value="mymensingh">Mymensingh</option>
                  <option value="sylhet">Sylhet</option>
                </Select>
              </Sidebar.Item>
              <Sidebar.Item>
                <Button onClick={handleFilter} className="w-full">
                  Search
                </Button>
              </Sidebar.Item>
              {/* Reset Button */}
              <Sidebar.Item>
                <Button onClick={handleReset} className="w-full mt-4" >
                  Reset Filters
                </Button>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Meet Our Premium Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((data) => (
            <AllBiodataCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBioData;

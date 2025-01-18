import { Button, Label, Select, Sidebar } from "flowbite-react";
import React from "react";

const Biodata = ({ filters, setFilters, onFilter }) => {
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
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item>
            <div>
              <Label htmlFor="gender" value="Gender" className="font-medium mb-1" />
              <Select
                id="gender"
                name="gender"
                value={filters.gender}
                onChange={handleChange}
                aria-label="Gender"
              >
                <option value="">All</option>
                <option>Man</option>
                <option>Woman</option>
              </Select>
            </div>
          </Sidebar.Item>
          <Sidebar.Item>
            <div>
              <Label htmlFor="age-range" value="Age Range" className="font-medium mb-1" />
              <Select
                id="age"
                name="age"
                value={filters.age}
                onChange={handleChange}
                aria-label="Age Range"
              >
                <option value="">All</option>
                {ageRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </Select>
            </div>
          </Sidebar.Item>
          <Sidebar.Item>
            <div>
              <Label
                htmlFor="division"
                value="Select Division"
                className="font-medium mb-1"
              />
              <Select
                id="division"
                name="division"
                value={filters.division}
                onChange={handleChange}
                aria-label="Select Division"
              >
                <option value="">All</option>
                <option>Dhaka</option>
                <option>Chattagram</option>
                <option>Rangpur</option>
                <option>Barishal</option>
                <option>Khulna</option>
                <option>Mymensingh</option>
                <option>Sylhet</option>
              </Select>
            </div>
          </Sidebar.Item>
          <Sidebar.Item>
            <Button
              gradientMonochrome="info"
              type="button"
              onClick={onFilter}
              className="w-full font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              SEARCH
            </Button>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Biodata;

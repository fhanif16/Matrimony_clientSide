import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ApprovedPremium = () => {
  const [premiumStatus, setPremiumStatus] = useState({});
  const [biodata, setBiodata] = useState([]);

  useEffect(() => {
   
    const fetchBiodata = async () => {
      try {
        const response = await fetch(''); 
        const data = await response.json();
        setBiodata(data);
      } catch (error) {
        console.error('Error fetching biodata:', error);
      }
    };

    fetchBiodata();
  }, []);


  const handleMakePremium = (biodataId, name) => {
    setPremiumStatus((prevStatus) => ({
      ...prevStatus,
      [biodataId]: true,
    }));

    Swal.fire({
      title: `${name}'s Biodata is Now Premium!`,
      text: 'This user now has premium status.',
      icon: 'success',
      confirmButtonText: 'Close',
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Premium Approval Requests</h1>

 
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Biodata ID</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Make Premium</th>
            </tr>
          </thead>
          <tbody>
            {biodata.map((item) => (
              <tr key={item.biodataId}>
                <td className="px-6 py-4 text-sm text-gray-800">{item.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{item.email}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{item.biodataId}</td>
                <td className="px-6 py-4">
                  {!premiumStatus[item.biodataId] ? (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => handleMakePremium(item.biodataId, item.name)}
                    >
                      Make Premium
                    </button>
                  ) : (
                    <span className="text-green-500">Premium</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedPremium;

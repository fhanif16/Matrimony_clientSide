import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ApprovedContactRequest = () => {
  const [contactRequests, setContactRequests] = useState([]);

  // Fetch data from the server
  useEffect(() => {
    const fetchContactRequests = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/contact-requests'); // Replace with your API URL
        const data = await response.json();
        setContactRequests(data);
      } catch (error) {
        console.error('Error fetching contact requests:', error);
      }
    };

    fetchContactRequests();
  }, []);

  // Function to handle approval
  const handleApprove = (name) => {
    Swal.fire({
      title: `${name}'s Contact Request Approved!`,
      text: 'You can now view the biodata.',
      icon: 'success',
      confirmButtonText: 'Close',
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Contact Requests</h1>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Biodata ID</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Approved Contact</th>
            </tr>
          </thead>
          <tbody>
            {contactRequests.length > 0 ? (
              contactRequests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 text-sm text-gray-800">{request.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{request.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{request.biodataId}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => handleApprove(request.name)}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="px-6 py-4 text-center text-gray-500"
                  colSpan="4"
                >
                  No contact requests available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedContactRequest;

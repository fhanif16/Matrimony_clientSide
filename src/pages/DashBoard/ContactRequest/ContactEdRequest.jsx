import { Button } from 'flowbite-react';
import React, { useState, useEffect } from 'react';


const ContactEdRequest = () => {
  const [contactRequests, setContactRequests] = useState([]);

  useEffect(() => {
   
    fetch('https://matrimony-platform-server.vercel.app/contact-requests')  
      .then((response) => response.json())
      .then((data) => setContactRequests(data))
      .catch((error) => console.error('Error fetching contact requests:', error));
  }, []);

  const handleDelete = (id) => {
  
    fetch(`https://matrimony-platform-server.vercel.app/contact-requests/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete contact request');
        }
        return response.json();
      })
      .then(() => {
        setContactRequests((prevRequests) =>
          prevRequests.filter((req) => req.id !== id)
        );
      })
      .catch((error) => console.error('Error deleting contact request:', error));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Biodata ID</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Mobile No</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactRequests.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-4 py-2 text-center">
                No contact requests available
              </td>
            </tr>
          ) : (
            contactRequests.map((request) => (
              <tr key={request.id}>
                <td className="px-4 py-2">{request.name}</td>
                <td className="px-4 py-2">{request.biodataId}</td>
                <td className="px-4 py-2">{request.status}</td>
                <td className="px-4 py-2">
                  {request.status === 'Approve' ? request.mobileNo : 'N/A'}
                </td>
                <td className="px-4 py-2">
                  {request.status === 'Approve' ? request.email : 'N/A'}
                </td>
                <td className="px-4 py-2">
                  <Button onClick={() => handleDelete(request.id)} color="failure">
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactEdRequest;

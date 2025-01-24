import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { Button } from 'flowbite-react';

const ViewBiodata = () => {
  const { user, loading } = useContext(AuthContext); // Getting the logged-in user
  const [biodata, setBiodata] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://matrimony-platform-server.vercel.app/biodata/user?email=${user.email}`)
        .then((response) => response.json())
        .then((data) => setBiodata(data));
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!biodata.length) {
    return <div>No biodata found.</div>;
  }

  //id, biodataType, profileImage,permanentDivisionname,age,occupation, member, race,fatherName, motherName,dateOfBirth,height,weight,expectedPartnerAge, expectedPartnerHeight,expectedPartnerWeight,contactEmail,mobileNumber

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center p-4">My Biodata</h1>
      <div className="space-y-6">
        {biodata.map((bio, index) => (
          <div key={index} className="card bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4">
              <img
                src={bio. profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800">{bio.name}</h2>
                <p className="text-gray-600">{bio.occupation} | {bio.age} years old</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p><strong>Date of Birth:</strong> {bio.dateOfBirth}</p>
              <p><strong>Height:</strong> {bio.height} cm</p>
              <p><strong>Weight:</strong> {bio.weight} kg</p>
              <p><strong>Race:</strong> {bio.race}</p>
              <p><strong>Father's Name:</strong> {bio.
fathersName}</p>
              <p><strong>Mother's Name:</strong> {bio. mothersName}</p>
              <p><strong>Permanent Division:</strong> {bio.
permanentDivisionname}</p>
              <p><strong>Present Division:</strong> {bio.


presentDivisionname}</p>
              <p><strong>Expected Partner's Age:</strong> {bio.expectedPartnerAge}</p>
              <p><strong>Expected Partner's Height:</strong> {bio.expectedPartnerHeight} cm</p>
              <p><strong>Expected Partner's Weight:</strong> {bio.expectedPartnerWeight} kg</p>
              <p><strong>Contact Email:</strong> {bio.contactEmail}</p>
              <p><strong>Mobile Number:</strong> {bio.mobileNumber}</p>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link to={`editBiodata/${bio._id}`}>
                <Button  gradientMonochrome="info" className="rounded-lg bg-blue-500 px-5 py-2.5 m-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Edit
                </Button>
              </Link>

              <Link to={`editBiodata/${bio._id}`}>
                <Button  gradientMonochrome="info" className="rounded-lg bg-blue-500 px-5 py-2.5 m-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Make Premium
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBiodata;

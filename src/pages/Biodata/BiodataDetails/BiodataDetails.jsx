


import { Button } from 'flowbite-react';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const BiodataDetails = () => {
    const { user } = useContext(AuthContext); // Get logged-in user from context
    const [isFavorite, setIsFavorite] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const { currentBiodata, similarBiodata } = useLoaderData(); // Get biodata details

    const {
        _id,
        name,
        bioId,
        biodataType,
        profileImage,
        permanentDivisionname,
        age,
        occupation,
        member,
        race,
        fathersName,
        mothersName,
        dateOfBirth,
        height,
        weight,
        expectedPartnerAge,
        expectedPartnerHeight,
        expectedPartnerWeight,
        contactEmail,
        mobileNumber,
    } = currentBiodata;

    useEffect(() => {
       
        fetch(`http://localhost:5000/users/${user.email}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.member) {
                    setUserRole(data.member); 
                }
            })
            .catch((err) => {
                console.error("Error fetching user details:", err);
            });
    }, [user.email]);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            Swal.fire({
                title: "Already in Favorites",
                text: "This biodata is already in your favorites list.",
                icon: "info"
            });
            return;
        }

        const biodataDetails = {
            name,
            biodataType,
            profileImage,
            permanentDivisionname,
            age,
            occupation,
            member,
            race,
            fathersName,
            mothersName,
            dateOfBirth,
            height,
            weight,
            expectedPartnerAge,
            expectedPartnerHeight,
            expectedPartnerWeight,
            contactEmail,
            mobileNumber,
        };

        fetch('http://localhost:5000/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                biodataId: bioId,
                userEmail: user.email,
                biodataDetails: biodataDetails,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Done!",
                        text: "Successfully Added as Favorite",
                        icon: "success"
                    });
                    setIsFavorite(true);
                }
            })
            .catch((err) => {
                Swal.fire({
                    title: "Error",
                    text: "Failed to add to favorites.",
                    icon: "error"
                });
                console.error('Error adding to favorites:', err);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-col items-center py-6">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                    <div className="flex justify-center">
                        <img
                            src={profileImage || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-center mt-4">{biodataType}</h2>
                    <div className="mt-4">
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>ID:</strong> {bioId}</p>
                        <p><strong>Division:</strong> {permanentDivisionname}</p>
                        <p><strong>Age:</strong> {age}</p>
                        <p><strong>Occupation:</strong> {occupation}</p>
                        <p><strong>Member:</strong> {member}</p>
                        <p><strong>Race:</strong> {race}</p>
                        <p><strong>Father's Name:</strong> {fathersName}</p>
                        <p><strong>Mother's Name:</strong> {mothersName}</p>
                        <p><strong>Date of Birth:</strong> {dateOfBirth}</p>
                        <p><strong>Height:</strong> {height} cm</p>
                        <p><strong>Weight:</strong> {weight} kg</p>
                        <p><strong>Expected Partner Age:</strong> {expectedPartnerAge} years</p>
                        <p><strong>Expected Partner Height:</strong> {expectedPartnerHeight} cm</p>
                        <p><strong>Expected Partner Weight:</strong> {expectedPartnerWeight} kg</p>

                     
                        {userRole === "premium" || userRole ==='admin' ? (
                            <div className="mt-4">
                                <p><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-blue-600 underline">{contactEmail}</a></p>
                                <p><strong>Mobile:</strong> {mobileNumber}</p>
                            </div>
                        ) : (
                            <div className="mt-4">
                                <Link to={`/checkout/${_id}`}>
                                    <Button>Request Information</Button>
                                </Link>
                            </div>
                        )}

                        <div className="mt-2">
                            <Button onClick={handleFavoriteClick}>Add Favourite</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl font-bold text-center mb-4">Similar Biodata</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {similarBiodata.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-lg rounded-lg p-4"
                            >
                                <div className="flex justify-center">
                                    <img
                                        src={item.profileImage || 'https://via.placeholder.com/150'}
                                        alt="Profile"
                                        className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-center mt-2">{item.biodataType}</h4>
                                <p className="text-sm text-center mt-1">Age: {item.age}</p>
                                <p className="text-sm text-center">Height: {item.height} cm</p>
                                <p className="text-sm text-center">Weight: {item.weight} kg</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiodataDetails;


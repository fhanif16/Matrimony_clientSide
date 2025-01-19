import { Button } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BiodataDetails = () => {
    const { currentBiodata, similarBiodata } = useLoaderData();
    const {
        id,
        biodataType,
        profileImage,
        permanentDivisionname,
        age,
        occupation,
        member,
        race,
        fatherName,
        motherName,
        dateOfBirth,
        height,
        weight,
        expectedPartnerAge,
        expectedPartnerHeight,
        expectedPartnerWeight,
        contactEmail,
        mobileNumber,
    } = currentBiodata;

   
    const isPremiumMember = member?.toLowerCase() === 'premium';

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
                        <p><strong>ID:</strong> {id}</p>
                        <p><strong>Division:</strong> {permanentDivisionname}</p>
                        <p><strong>Age:</strong> {age}</p>
                        <p><strong>Occupation:</strong> {occupation}</p>
                        <p><strong>Member:</strong> {member}</p>
                        <p><strong>Race:</strong> {race}</p>
                        <p><strong>Father's Name:</strong> {fatherName}</p>
                        <p><strong>Mother's Name:</strong> {motherName}</p>
                        <p><strong>Date of Birth:</strong> {dateOfBirth}</p>
                        <p><strong>Height:</strong> {height} cm</p>
                        <p><strong>Weight:</strong> {weight} kg</p>
                        <p><strong>Expected Partner Age:</strong> {expectedPartnerAge} years</p>
                        <p><strong>Expected Partner Height:</strong> {expectedPartnerHeight} cm</p>
                        <p><strong>Expected Partner Weight:</strong> {expectedPartnerWeight} kg</p>
                        
                       
                        {isPremiumMember ? (
                            <>
                                <p><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-blue-600 underline">{contactEmail}</a></p>
                                <p><strong>Mobile:</strong> {mobileNumber}</p>
                            </>
                        ) : (
                            <p className="text-red-500 mt-4"><em>Contact information is available for premium members only.</em></p>
                        )}

                        
                        {!isPremiumMember && (
                            <div className="mt-4">
                                <Button>Request Information</Button>
                            </div>
                        )}
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

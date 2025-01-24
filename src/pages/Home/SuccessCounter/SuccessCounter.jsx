import React, { useEffect, useState } from 'react';

const SuccessCounter = () => {
    const [successData, setSuccessData] = useState({
        totalBiodata: 0,
        totalGirls: 0,
        totalBoys: 0,
        totalMarriages: 0
    });

    useEffect(() => {
        fetch('https://matrimony-platform-server.vercel.app/successCounter')
            .then((res) => res.json())
            .then((data) => setSuccessData(data))
            .catch((error) => console.error('Error fetching success counters:', error));
    }, []);

    return (
        <div className="success-counter-section bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg mt-4">
            <h2 className="text-3xl font-semibold text-center text-white animate__animated animate__fadeIn">
                Our Success 

            </h2>
            <div className="counter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="counter-item bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-white animate__animated animate__fadeIn animate__delay-1s">
                    <p className="text-lg font-semibold">Total Biodata</p>
                    <p className="text-2xl font-bold text-indigo-600">{successData.totalBiodata}</p>
                </div>

                <div className="counter-item bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-white animate__animated animate__fadeIn animate__delay-2s">
                    <p className="text-lg font-semibold">Total Girls Biodata</p>
                    <p className="text-2xl font-bold text-indigo-600">{successData.totalGirls}</p>
                </div>

                <div className="counter-item bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-white animate__animated animate__fadeIn animate__delay-3s">
                    <p className="text-lg font-semibold">Total Boys Biodata</p>
                    <p className="text-2xl font-bold text-indigo-600">{successData.totalBoys}</p>
                </div>

                <div className="counter-item bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-white animate__animated animate__fadeIn animate__delay-4s">
                    <p className="text-lg font-semibold">Total Completed Marriages</p>
                    <p className="text-2xl font-bold text-indigo-600">{successData.totalMarriages}</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessCounter;

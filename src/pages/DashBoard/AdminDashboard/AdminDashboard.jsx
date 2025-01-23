import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

const AdminDashboard = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/biodataStats')
            .then((res) => res.json())
            .then((data) => {
                setChartData({
                    labels: ['Total Biodata', 'Male Biodata', 'Female Biodata', 'Premium Biodata', 'Revenue'],
                    datasets: [
                        {
                            label: '',
                            data: [
                                data.totalBiodata,
                                data.maleBiodata,
                                data.femaleBiodata,
                                data.premiumBiodata,
                                data.totalRevenue
                            ],
                            backgroundColor: [
                                '#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336'
                            ],
                        },
                    ],
                });
            })
            .catch((error) => console.error('Error fetching chart data:', error));
    }, []);

    return (
        <div className="chart-container p-6">
            <h2 className="text-center text-xl font-bold mb-4">Biodata and Revenue Overview</h2>
            {chartData ? (
                <Pie data={chartData} />
            ) : (
                <p>Loading chart...</p>
            )}
        </div>
    );
};

export default AdminDashboard;



import React, { useEffect, useState } from 'react';
import SingleSuccessStory from '../SingleSuccessStory/SingleSuccessStory';
import Marquee from 'react-fast-marquee';

const SuccessStorySection = () => {
    const [reviews, setReviews] = useState([]);
    const [sortedByDate, setSortedByDate] = useState(false); 
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    const sortByDate = () => {
        const sortedReviews = [...reviews].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortedByDate ? dateA - dateB : dateB - dateA; 
        });
        setReviews(sortedReviews);
        setSortedByDate(!sortedByDate); 
    };

    return (
        <div className="mt-4 mb-4 bg-slate-50">
            <div>
                <p className="text-5xl text-center">Our Success Stories</p>
                <Marquee>
                    <p className="text-2xl text-center mt-4">
                        Better Half, the largest site for serious Dating with over 2,000,000 of Singles in Bangladesh, is
                        also one of the best known Internet brands and the world's largest matrimonial and serious dating
                        service. It was founded with a simple objective - to help people find happiness.
                    </p>
                </Marquee>
            </div>

            <div className="text-center mt-4">
                {/* <button
                    onClick={sortByDate}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Sort by Date ({sortedByDate ? 'Oldest First' : 'Newest First'})
                </button> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-4 mr-4">
                {reviews.map((review) => (
                    <SingleSuccessStory key={review.id} review={review}></SingleSuccessStory>
                ))}
            </div>
        </div>
    );
};

export default SuccessStorySection;




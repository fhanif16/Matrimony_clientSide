import React, { useEffect, useState } from 'react';
import SingleSuccessStory from '../SingleSuccessStory/SingleSuccessStory';
import Marquee from 'react-fast-marquee';

const SuccessStorySection = () => {

    const [reviews , setReviews] = useState([]);
    
    
        useEffect( () => {
            fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    
    
    
        } , [])
    return (
        <div className='mt-4 mb-4 bg-slate-50'>

            <div>
            <p className='text-5xl text-center'>Our Success Stories</p>
                <Marquee> <p className='text-2xl text-center mt-4'>Better Half, the largest site for serious Dating with over 2,000,000 of Singles in Bangladesh, is also one of the best known Internet brands and the world's largest matrimonial and serious dating service. It was founded with a simple objective - to help people find happiness. 
                    </p></Marquee>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-4  mt-4 ml-4 mr-4'>
                {
                    reviews.map(review => <SingleSuccessStory key={review.id} review={review}></SingleSuccessStory>  )


                }
            </div>




            
        </div>
    );
};

export default SuccessStorySection;
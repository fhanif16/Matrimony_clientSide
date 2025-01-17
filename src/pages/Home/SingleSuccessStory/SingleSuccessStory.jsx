import { Card } from 'flowbite-react';
import React from 'react';

const SingleSuccessStory = ({ review }) => {
  const { image, marriageDate, reviewStar, successStory } = review;

  const renderStars = (count) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-5 w-5 ${i < count ? 'text-yellow-300' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="w-full p-4">
      <Card className="max-w-sm shadow-lg transform-gpu transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl">
        <img
          src={image}
          alt="Couple Image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {successStory}
          </h5>
          <div className="flex items-center mt-3">
            <div className="flex items-center">{renderStars(reviewStar)}</div>
            <span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {reviewStar}
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Date: {marriageDate}
          </p>
        </div>
      </Card>
      <style jsx>{`
        .max-w-sm {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .max-w-sm:hover {
          transform: scale(1.1); /* Enlarge the component */
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Add shadow for zoom effect */
        }
      `}</style>
    </div>
  );
};

export default SingleSuccessStory;

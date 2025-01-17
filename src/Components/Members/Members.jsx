import { Button, Card } from 'flowbite-react';
import React from 'react';

const Members = ({data}) => {
    const {id, biodataType, profileImage,permanentDivisionname,age,occupation, member} = data;
    console.log(biodataType)

    return (
        <Card className="max-w-sm">
      
      <img
        src={profileImage}
        
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">
       
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         Gender: {biodataType} 
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Age:</strong> {age}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Occupation:</strong> {occupation}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Division:</strong> {permanentDivisionname}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <strong>Membership:</strong> {member.charAt(0).toUpperCase() + member.slice(1)}
        </p>
        <Button gradientMonochrome="info">View details</Button>
      </div>
    </Card>
  );
};


export default Members;
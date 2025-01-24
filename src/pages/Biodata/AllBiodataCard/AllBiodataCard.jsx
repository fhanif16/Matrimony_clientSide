import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AllBiodataCard = ({data}) => {
    const {_id,bioId, biodataType, profileImage,permanentDivisionname,age,occupation, member, race,fatherName, motherName,dateOfBirth,height,weight,expectedPartnerAge, expectedPartnerHeight,expectedPartnerWeight,contactEmail,mobileNumber} = data;


   
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
             <strong>ID:</strong> {bioId}
           </p>
           <p className="font-normal text-gray-700 dark:text-gray-400">
             <strong>Age:</strong> {age}
           </p>
           <p className="font-normal text-gray-700 dark:text-gray-400">
             <strong>Occupation:</strong> {occupation}
           </p>
           <p className="font-normal text-gray-700 dark:text-gray-400">
             <strong>Division:</strong> {permanentDivisionname}
           </p>
          
           <Link to={`/biodata/${bioId}`}>


          <Button gradientMonochrome="info">View details </Button>
          </Link>
         </div>
       </Card>
     );
   };
   

export default AllBiodataCard;


// import React, { useEffect, useState } from 'react';
// import Members from '../../../Components/Members/Members';

// const PremiumMember = () => {
//     const [biodata, setBiodata] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/biodata')
//             .then((res) => res.json())
//             .then((data) => {
//                 const premiumMembers = data.filter((m) => m.member === 'Premium');
//                 // Sort by age in ascending order
//                 const sortedMembers = premiumMembers.sort((a, b) => a.age - b.age);
//                 setBiodata(sortedMembers);
//             });
//     }, []);

//     return (
//         <div className="mt-4">
//             <div>
//                 <p className="text-5xl text-center">Meet Our Premium Members</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//                 {biodata.slice(0, 6).map((data) => (
//                     <Members key={data.id} data={data} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PremiumMember;


import React, { useEffect, useState } from 'react';
import Members from '../../../Components/Members/Members';
import { Button } from 'flowbite-react';

const PremiumMember = () => {
    const [biodata, setBiodata] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // State to track sorting order

    useEffect(() => {
        fetch('http://localhost:5000/biodata')
            .then((res) => res.json())
            .then((data) => {
                const premiumMembers = data.filter((m) => m.member === 'premium');
                
                const sortedMembers = premiumMembers.sort((a, b) => a.age - b.age);
                setBiodata(sortedMembers);
            });
    }, []);

    const toggleSortOrder = () => {
        const sorted = [...biodata].sort((a, b) => {
            return sortOrder === 'asc' ? b.age - a.age : a.age - b.age;
        });
        setBiodata(sorted);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); 
    };

    return (
        <div className="mt-4">
            <div>
                <p className="text-5xl text-center">Meet Our Premium Members</p>
            </div>

          
            <div className="text-center mt-4">
                <Button  gradientMonochrome="info"
                    onClick={toggleSortOrder}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Sort by Age ({sortOrder === 'asc' ? 'Descending' : 'Ascending'})
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {biodata.slice(0, 6).map((data) => (
                    <Members key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default PremiumMember;





import React, { useEffect, useState } from 'react';
import Members from '../../../Components/Members/Members';

const PremiumMember = () => {

    const [biodata , setBiodata] = useState([]);


    useEffect( () => {
        fetch('biodata.json')
        .then(res => res.json())
        .then(data => {
            const premiumMembers = data.filter(m => m.member ==='premium')
            setBiodata(premiumMembers)
        })



    } , [])
    return (
        <div className='mt-4'>

            <div>
                <p className='text-5xl text-center'>Meet Our Premium Members</p>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-4  mt-4'>
                {
                    biodata.slice(0,6).map(data => <Members key={data.id} data={data}></Members>  )


                }
            </div>




            
        </div>
    );
};

export default PremiumMember;
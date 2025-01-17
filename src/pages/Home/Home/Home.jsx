import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import PremiumMember from '../PremiumMember/PremiumMember';
import HowItWorks from '../HowItWorks/HowItWorks';
import SuccessStorySection from '../SuccessStorySection/SuccessStorySection';
import Marquee from 'react-fast-marquee';
import SuccessCounter from '../SuccessCounter/SuccessCounter';

const Home = () => {
    return (
        <div>

           
            <Banner></Banner>
            <PremiumMember></PremiumMember>
            <HowItWorks></HowItWorks>
            <SuccessCounter></SuccessCounter>

           
           <SuccessStorySection></SuccessStorySection>
          

            
        </div>
    );
};

export default Home;
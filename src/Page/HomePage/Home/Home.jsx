import React from 'react';
import Navbar from '../../Sheard/Navbar';
import Banner from '../Banner/Banner';
import GameStoreCard from '../GameStoreCard/GameStoreCard';
import Sponsored from '../Sponsored/Sponsored';
import Publications from '../Publications/Publications';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';



const Home = () => {
    return (
        <div className='bg-[#292636] h-full'>
           <Navbar></Navbar>
           <Banner></Banner>
           <GameStoreCard></GameStoreCard>
           <Sponsored></Sponsored>
           <Publications></Publications>
           <Contact></Contact>
           <Features></Features>
        </div>
    );
};

export default Home;
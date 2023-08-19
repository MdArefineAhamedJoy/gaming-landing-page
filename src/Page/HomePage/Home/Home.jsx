import React from 'react';
import Navbar from '../../Sheard/Navbar';
import Banner from '../Banner/Banner';
import GameStoreCard from '../GameStoreCard/GameStoreCard';
import Sponsored from '../Sponsored/Sponsored';
import Publications from '../Publications/Publications';



const Home = () => {
    return (
        <div className='bg-[#292636] h-full'>
           <Navbar></Navbar>
           <Banner></Banner>
           <GameStoreCard></GameStoreCard>
           <Sponsored></Sponsored>
           <Publications></Publications>
        </div>
    );
};

export default Home;
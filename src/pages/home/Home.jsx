import React from 'react';
import './style.scss';
import HeroBanner from './hero/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './toprated/Toprated';


const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      </div>
  )
}

export default Home
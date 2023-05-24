import React from 'react'
 import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
 import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
 import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';
import Carousel from '../../../components/carousel/Carousel';

const TopRated = () => {
const[endpoint,setEndpoint]= useState("movie");
const {data,loading} = useFetch(`/${endpoint}/top_rated`);


    const onTabChange = (tab)=>{
        setEndpoint(tab=== "movies"? "movie": "tv")

    };
  return (
    <div className='carouselSection'>
        <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data = {["Movies","Tv Shows"]} onTabChange ={onTabChange}/>
        </ContentWrapper>
        <Carousel 
        data={data?.results} 
        loading={loading}
        endpoint={endpoint}
        />
    </div>
  )
}

export default TopRated;
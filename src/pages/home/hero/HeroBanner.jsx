import React, { useEffect, useState } from 'react';
import{useSelector}from 'react-redux';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import Img from '../../../components/lazyLoadImage/Img';

const HeroBanner = () => {
    const[background,setbackground]= useState("");
    const[query,setQuery]= useState("");
    const navigate = useNavigate();
    const {url}= useSelector((state)=>state.home)
    const{data,loading}= useFetch("/movie/upcoming");
     
    useEffect(()=>{
        const bg = 
        url.backdrop +  
        data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
        setbackground(bg);
    }, [data]);
    // useEffect(() => {
    //     if (url.backdrop && data?.results) {
    //         const randomIndex = Math.floor(Math.random() * data.results.length);
    //         const backdropPath = data.results[randomIndex]?.backdrop_path;
    //         if (backdropPath) {
    //             const bg = url.backdrop + backdropPath;
    //             setbackground(bg);
    //         }
    //     }
    // }, [data, url.backdrop]);

    const searchQueryhandler = (event)=>{
        if(event.key === "Enter" && query.length>0){
       navigate(`/search/${query}`);
        }

    }
  return (
    <div className="heroBanner">
        {!loading &&(<div className="backdrop-img">
        <Img src={background}/>
        </div>
        )}
        <div className="opacity-layer"></div>
            <ContentWrapper>
            <div className="heroBannerContent">
                <span className="title">Welcome..</span>
                <span className="subTitle">Millions of Movies, Tv Shows and people to Discover.. 
                Explore Now....</span>
            
            <div className="searchInput">
                <input 
                type="text"
                placeholder='Search for Movies and tv shows....'
                onChange={(e)=>setQuery(e.target.value)}
                onKeyUp={searchQueryhandler}
                 />
                 <button>Search</button>
            </div>
            </div>
        
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner
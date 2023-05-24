import { useState } from 'react';
import './App.css';
import{useDispatch,useSelector} from 'react-redux';
import{getApiConfiguration,getGenres } from '../src/store/homeSlice'
import { fetchDataFrmApi } from './utils/api';
import { useEffect } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import Searchresult from './pages/searchresult/SearchResult';
import PageNotFound from './pages/404/pageNotFound';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const{url} = useSelector((state)=>state.home)
  
  useEffect(()=>{
    fetchapi()
    genresCall()
  },[])
  const fetchapi = ()=>{
    fetchDataFrmApi('/configuration').then((res)=>{
      console.log(res);
      // const options = {
      //   method: "GET",
      //   action: res.images.secure_base_url+"o",
      // }
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster:  res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      };
      dispatch(getApiConfiguration(url))
    });
    
    
    
  };

  const genresCall = async()=>{
    let promises = [];
    let endpoints =["movie","tv"];
    let allGenres = {};
    endpoints.forEach((url)=>{
   promises.push(fetchDataFrmApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    //console.log(data);
    data.map(({genres})=>{
   return genres.map((item)=>(allGenres[item.id]= item))
    })
    //console.log(allGenres);
    dispatch(getGenres(allGenres));

  }
   

  return (
    <>
      <BrowserRouter>
       <Header/> 
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/:mediaType/:id'element={<Details/>}/>
        <Route path='/search/:query'element={<Searchresult/>}/>
        <Route path='/explore/:mediaType'element={<Explore/>}/>
        <Route path='*'element={<PageNotFound/>}/>
      </Routes>
       <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App

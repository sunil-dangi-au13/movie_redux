import axios from "axios";
 const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =import.meta.env.VITE_APP_TMDB_TOKEN ;
const headers = {
    Authorization:"bearer " + TMDB_TOKEN
};
// export const fetchdata = async ({ action, method, headers, data }) => {
//     const apiUrl = import.meta.env.VITE_BASE_URL
//     const res = await axios({
//         method,
//         headers:headers,
//         baseURL: apiUrl,
//         url: action,
//         data,
//     }).catch(error => {
//         console.log('error',error.res.data);
//         return error.res
//     })
//     return res.data
// }
export const fetchDataFrmApi = async(url,params)=>{
    try {
        const{data}= await axios.get(BASE_URL + url,{
            headers,
            params,
        });
        return data;
        
    } catch (error) {
      console.log(error); 
      return error 
    }
}
import axios from "axios";
const API_KEY = '8c20be1e2520747003a3263d1b85faf7';
const BASE_URL = 'https://api.themoviedb.org/3';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
    },
  });
  const fetchData = axiosInstance.get('/movie/popular');
  // .then(() => {
// resolve(res)
  // }).catch(()=> {
//reject(err)
  // });
//  {fetchData().then().catch()}
  export const fetchFeaturedMovies = async () => {
    try {
      const response = await axiosInstance.get('/movie/popular');
      return response.data;
    } catch (error) {
      console.error('Error fetching featured movies:', error);
      throw error;
    }
  };
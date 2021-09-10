import  axios  from 'axios';


export const api = axios.create({
   baseURL: 'http://www.googleapis.com/youtube/v3',
/*   baseURL: 'http://localhost:3004' */
});

export default api;
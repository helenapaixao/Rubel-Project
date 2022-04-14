import  axios  from 'axios';


export const api = axios.create({
   baseURL: 'http://www.googleapis.com/youtube/v3',

});

export default api;
import  axios  from 'axios';


export const api = axios.create({
   baseURL: 'http://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 20,
      key: "AIzaSyDZJbjtEByjJf1D53Ic-s0IbsTxB75b2Po", 


   }

});

export default api;
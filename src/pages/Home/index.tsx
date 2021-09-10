import React,{useEffect, useState} from 'react';
import api from '../../services/api'

export const Home = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get("commentThreads?key=AIzaSyBVvjnVOq46KUN693RBjLFCORCu2ODf8rw&textFormat=plainText&part=snippet&videoId=tMWpm_GOLaA&maxResults=50").then(response => {
      console.log(response.data)
    })

  }, [comments]);


  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home;
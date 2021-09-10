import React,{useEffect, useState} from 'react';
import api from '../../services/api'

interface IComments {
  textDisplay: string,
}

export const Home = () => {
  const [comments, setComments] = useState<IComments| null>(null);

  useEffect(() => {
    api.get("commentThreads?key=AIzaSyBVvjnVOq46KUN693RBjLFCORCu2ODf8rw&textFormat=plainText&part=snippet&videoId=tMWpm_GOLaA&maxResults=50").then(response => {
      console.log(response.data.items[0].snippet.topLevelComment.snippet.textDisplay);
      setComments(response.data.items[0].snippet.topLevelComment.snippet);
    })

  }, [comments]);

  return (
  <>
  
     
      <div>
        {comments && (
                <h1>{comments?.textDisplay}</h1>     
          )}
       

        </div>
    
    </>
  
  )
}

export default Home;
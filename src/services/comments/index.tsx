import api from '../api';
import {IComments} from './interface' 

export async function getComments() {
  const response = await api
      .get(
        "commentThreads?key=AIzaSyBVvjnVOq46KUN693RBjLFCORCu2ODf8rw&textFormat=plainText&part=snippet&videoId=tMWpm_GOLaA&maxResults=50"
  )
  return response.data.items as IComments[]
}






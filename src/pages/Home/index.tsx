import React, { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import ReactPlayer from "react-player/lazy";
import { Avatar } from "@chakra-ui/react"


interface IComments {
  textDisplay: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
}

export const Home = () => {
  const [comments, setComments] = useState<IComments | null>(null);

  useEffect(() => {
    api
      .get(
        "commentThreads?key=AIzaSyBVvjnVOq46KUN693RBjLFCORCu2ODf8rw&textFormat=plainText&part=snippet&videoId=tMWpm_GOLaA&maxResults=50"
      )
      .then((response) => {
      /*   console.log(
          response.data.items[0].snippet.topLevelComment.snippet.textDisplay
        ); */
        setComments(response.data.items[0].snippet.topLevelComment.snippet);
      });
  }, [comments]);

  return (
     
    <S.Container>
      <ReactPlayer url="https://www.youtube.com/watch?v=tMWpm_GOLaA" />
      <S.Comments>{comments?.textDisplay}</S.Comments>
      <S.NameUser>{comments?.authorDisplayName}</S.NameUser>
          <Avatar name="Dan Abrahmov" src={comments?.authorProfileImageUrl} />
    
    </S.Container>
  );
};

export default Home;
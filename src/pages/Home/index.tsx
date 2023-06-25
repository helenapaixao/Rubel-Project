import { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import ReactPlayer from 'react-player'


import { Avatar, Box, Center, Text } from "@chakra-ui/react";


interface IComments {
  textDisplay: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
}



export const Home = () => {
  const [comments, setComments] = useState<IComments[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await api.get(
          `commentThreads?key=AIzaSyDZJbjtEByjJf1D53Ic-s0IbsTxB75b2Po&textFormat=plainText&part=snippet&videoId=tMWpm_GOLaA&maxResults=50&pageToken=${nextPageToken}`
        );
        const commentData = response.data.items.map(
          (item: any) => item.snippet.topLevelComment.snippet
        );
        setComments((prevComments) => [...prevComments, ...commentData]);
        setNextPageToken(response.data.nextPageToken || "");

      } catch (error) {
        setError("Failed to fetch comments. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, []);

  return (
    <S.Container>
      <Center>
        <S.Title>Histórias de  quando bate aquela saudade</S.Title>
      </Center>
      <Center>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=tMWpm_GOLaA"
          controls={true}
        />
        
      </Center>
      <Center>
        <Box
          maxW="990px"
          width="200"
          overflow="hidden"
          marginTop="10"
        >
          {comments.map((comment) => (
            <Box key={comment.textDisplay} p="6">
              <Box d="flex" alignContent={"center"}>
                <Box ml="4">
                <Avatar
                      size="xl"
                      name={comment.authorDisplayName}
                      src={comment.authorProfileImageUrl}
                    />
              <Text fontWeight="bold" fontSize="20px">
                      {comment.authorDisplayName}
                    </Text>
                  <Box  mt="1"
                      fontWeight="normal"
                      as="span"
                      lineHeight="tight">
                  {comment.textDisplay}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        {/*   <S.Pagination>
          <button onClick={() => setNextPageToken((nextPageToken) + 1)}>
            Carregar mais
          </button>
          </S.Pagination> */}

        </Box>
      </Center>
    </S.Container>
  );
};

export default Home;

import { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../services/api";
import ReactPlayer from "react-player/lazy";
import { Avatar, Box, Center, Text } from "@chakra-ui/react";


interface IComments {
  textDisplay: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
}

export const Home = () => {
  const [comments, setComments] = useState<IComments[]>([]);

  useEffect(() => {
    async function loadComments() {
      const response = await api.get(
        "commentThreads?key=AIzaSyBVvjnVOq46KUN693RBjLFCORCu2ODf8rw&textFormat=plainText&part=snippet&videoId=tMWpm_GOLaA&maxResults=50"
      );
      setComments(
        response.data.items.map(
          (item: any) => item.snippet.topLevelComment.snippet
        )
      );

      console.log(response.data.items);
    }
    loadComments();
  }, []);

  return (
    <S.Container>
      <Center>
        <S.Title>Histórias sobre quando bate aquela saudade</S.Title>
      </Center>
      <Center>
        <ReactPlayer url="https://www.youtube.com/watch?v=tMWpm_GOLaA" />
      </Center>
      <Center>
        <Box
          maxW="990px"
          borderWidth="2px"
          borderRadius="lg"
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
                  <Text fontWeight="bold" fontSize="20px">{comment.authorDisplayName}</Text>
                  <Box mt="1" fontWeight="normal" as="span" lineHeight="tight">
                    {comment.textDisplay}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Center>
    </S.Container>
  );
};

export default Home;

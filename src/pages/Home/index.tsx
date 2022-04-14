import React, { useEffect, useState } from 'react'
import * as S from './styles'
import api from '../../services/api'
import ReactPlayer from 'react-player/lazy'
import { Avatar, Box, Center } from '@chakra-ui/react'

interface IComments {
  textDisplay: string
  authorDisplayName: string
  authorProfileImageUrl: string
}

export const Home = () => {
  const [comments, setComments] = useState<IComments | null>(null)

  useEffect(() => {
    api
      .get(
        'commentThreads?key=AIzaSyBVvjnVOq46KUN693RBjLFCORCu2ODf8rw&textFormat=plainText&part=snippet&videoId=tMWpm_GOLaA&maxResults=50',
      )
      .then((response) => {
        console.log(
          response.data.items[0].snippet.topLevelComment.snippet.textDisplay,
        )
        setComments(response.data.items[0].snippet.topLevelComment.snippet)
      })
  }, [comments])

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
          {comments &&  (
            <>
              <S.ContainerAvatar>
                <Avatar
                  marginTop="2"
                  marginBottom="2"
                  name={comments?.authorDisplayName}
                  src={comments?.authorProfileImageUrl}
                />
                <Box>
                  <S.NameUser>{comments?.authorDisplayName}</S.NameUser>
                </Box>
              </S.ContainerAvatar>

              <Center>
                <S.Comments>{comments?.textDisplay}</S.Comments>
              </Center>
            </>
          )}
        </Box>
      </Center>
    </S.Container>
  )
}

export default Home

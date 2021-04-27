import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Johnpaul Eze</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Johnpaul Eze</Heading>
          <Text color={colorSecondary[colorMode]}>I bring your desired web pages design to life using a modern,responsive and creative approach with the aid of brilliant tools and skillset.<br></br> I also derive fullfilment from creating amazing and well fitted graphics for the web(eg: landing page and social media) and printable documents like flyers and posters.</Text>
        </Flex>
      </Stack>
    </Container>
  )
}

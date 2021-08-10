
import { Box, Center, Container, Image, Text, Heading, Stack, Divider, chakra, Icon, Button, VStack, Wrap, useColorModeValue as mode, keyframes, Link } from '@chakra-ui/react';
// import { init } from 'ityped';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiRedux } from 'react-icons/si';
import Header from './Header';


const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const animation = `${spin} infinite 20s linear`;


export default function MainComponent() {

  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     strings: ['Developer', 'Designer', 'Content Creator']
  //   });
  // }, []);

  return (
    <Box textAlign="center" fontSize="xl">
      <Container maxW='container.xl'>
        <Header />

          <Stack spacing={5} mt={20} padding='2rem'>
              <Image src='me.svg' w='100px' h='100px' mx='auto' />
            
              <Heading
                // fontSize="4xl"
                fontSize={{base: 'xl', sm: '2xl', md: '3xl', lg: '4xl'}}
                fontWeight="extrabold"
              >
                Hello
                <chakra.span color='yellow.500'>!</chakra.span>
                {' '}I'm Deonte 
                <chakra.span color='red'>.</chakra.span>
              </Heading>
         
            <Text
              // fontSize="6xl"
              fontSize={{base: '2xl', sm: '3xl', md: '4xl', lg: '6xl'}}
              fontWeight="extrabold"
            >
              Front<chakra.span color='green'>-</chakra.span>End
              {' '}
              <chakra.span color='blue.300'>React</chakra.span>
              {' '}
              <Icon animation={animation} as={FaReact} w='3rem' h='3rem' color='blue.300' />
              {' '}
              Developer
              <chakra.span color='green.500'>.</chakra.span>
            </Text>

            <Center>
                <Button as={Link} href='mailto:dwallerofficial@gmail.com' textDecoration='none' colorScheme='linkedin' maxW='10rem' mx={'auto'} mb={20}>Contact Me</Button>            
            </Center>

          </Stack>

          <Divider />

          {/* About Me */}

          <Stack as='section' minH='60vh' id='about' mb={20}>
            <Heading fontSize='4xl' fontWeight='extrabold' color='green.300' my={20}>About Me</Heading>
            <Text color={mode('black', 'gray.400')} fontSize={{base: 'md', sm: '2xl', md: '3xl' }} fontWeight='extrabold' p={{ sm: 10, md: 30}} mb={20}>Enthusiastic Jr. Front-End Web and Mobile React Developer with 1 year of experience. Eager to contribute to team success by hard work, dedication, paying attention to detail, and having great organizational and communication skills. I have a clear understanding of Responsive Web Design, Flux / Redux architecture, CRUD operations, Version Control (GIT) and currently training in and learning HTML, CSS, JS, TypeScript with React, Node.js with MongoDB, and Firebase. Motivated to learn, grow, and excel in the front-end development industry.</Text>
          </Stack>

          <Divider />

          {/* Skills */}

          <Stack as='section' mb={20} minH='60vh' spacing={20} id='skills'>
            <Heading fontSize='5xl' fontWeight='extrabold' my={20} color='green.400'>Skills</Heading>

            <Center>
              <Wrap spacing={10} justify='center'>
                <VStack>
                  <Icon as={FaHtml5} w={{base: '4rem', sm: '5rem', md: '7rem'}} h={{base: '4rem', sm: '5rem', md: '7rem'}} color='orange' />
                  <Text>HTML</Text>
                </VStack>
                <VStack>
                  <Icon as={FaCss3Alt} w={{base: '4rem', sm: '5rem', md: '7rem'}} h={{base: '4rem', sm: '5rem', md: '7rem'}} color='blue' />
                  <Text>CSS</Text>
                </VStack>
                <VStack>
                  <Icon as={SiJavascript} w={{base: '4rem', sm: '5rem', md: '7rem'}} h={{base: '4rem', sm: '5rem', md: '7rem'}} color='gold' />
                  <Text>JS</Text>
                </VStack>
                <VStack>
                  <Icon as={FaReact} w={{base: '4rem', sm: '5rem', md: '7rem'}} h={{base: '4rem', sm: '5rem', md: '7rem'}} color='blue.300' />
                  <Text>React</Text>
                </VStack>
                <VStack>
                  <Icon as={SiRedux} w={{base: '4rem', sm: '5rem', md: '7rem'}} h={{base: '4rem', sm: '5rem', md: '7rem'}} color='purple.400' />
                  <Text>Redux</Text>
                </VStack>
                <VStack>
                  <Icon as={FaNodeJs} w={{base: '4rem', sm: '5rem', md: '7rem'}} h={{base: '4rem', sm: '5rem', md: '7rem'}} color='green' />
                  <Text>Node</Text>
                </VStack>
                <VStack>
                  <Icon as={SiMongodb} w={{base: '4rem', sm: '5rem', md: '7rem'}} h={{base: '4rem', sm: '5rem', md: '7rem'}} color='green.400' />
                  <Text>MongoDB</Text>
                </VStack>
                <VStack>
                  <Icon as={FaGitAlt} w={{base: '4rem', sm: '5rem', md: '7rem'}} h={{base: '4rem', sm: '5rem', md: '7rem'}} color='orange.400' />
                  <Text>Git</Text>
                </VStack>
              </Wrap>
            </Center>

          </Stack>

          <Divider />

          {/* Projects */}

          <Stack as='section' minH='60vh' mb={20} id='projects'>
            <Heading fontSize='4xl' fontWeight='extrabold' my={20} color='green.300'>Projects</Heading>

            <Center>
              <Wrap align='center' justify='center' spacing={10}>

                <Box w={{base: '300px', sm: '350px', md: '400px'}} h={{base: '300px', sm: '350px', md: '400px'}} bgColor={mode('gray.100', 'gray.900')} border='2px solid' 
                  borderColor='gray.600' rounded='10px' boxShadow='dark-lg' _hover={{transform: 'scale(1.1)'}}>
                  <Link href='https://dquo-movie-react-app.netlify.app'>
                    <Image src='movieproject.png' alt='Movie App Project' rounded='10px' />
                  </Link>
                  <VStack mt={2}>
                    <Heading mb={5} fontSize='2xl'>Movie Database App</Heading>
                    <Text fontSize={{base: 'sm', sm: 'medium', md: 'lg', lg: 'xl' }}>Search for any movie and see an overview.</Text>
                  </VStack>
                </Box>

                <Box w={{base: '300px', sm: '350px', md: '400px'}} h={{base: '300px', sm: '350px', md: '400px'}} bgColor={mode('gray.100', 'gray.900')} border='2px solid' 
                  borderColor='gray.600' rounded='10px' boxShadow='dark-lg' _hover={{transform: 'scale(1.1)'}}>
                  <Link href='https://21-blackjack-dquo.netlify.app'>
                    <Image src='blackjack.png' rounded='10px' />
                  </Link>
                  <VStack mt={2}>
                    <Heading mb={5} fontSize='2xl'>Hackathon Blackjack App</Heading>
                    <Text fontSize={{base: 'sm', sm: 'medium', md: 'lg', lg: 'xl' }}>Play 21/Blackjack against the computer. Mintbean Hackathon July 2021.</Text>
                  </VStack>
                </Box>

                <Box w={{base: '300px', sm: '350px', md: '400px'}} h={{base: '300px', sm: '350px', md: '400px'}} bgColor={mode('gray.100', 'gray.900')} border='2px solid' 
                borderColor='gray.600' rounded='10px' boxShadow='dark-lg' _hover={{transform: 'scale(1.1)'}}>
                  <Link href='https://dquo-video-chat-app.netlify.app/'>
                    <Image src='videochat.png' rounded='10px' />
                  </Link>
                  <VStack mt={2}>
                    <Heading mb={5} fontSize='2xl'>View Chat App</Heading>
                    <Text fontSize={{base: 'sm', sm: 'medium', md: 'lg', lg: 'xl' }}>Video chat with your friends!</Text>
                  </VStack>
                </Box>

                <Box w={{base: '300px', sm: '350px', md: '400px'}} h={{base: '300px', sm: '350px', md: '400px'}} bgColor={mode('gray.100', 'gray.900')} border='2px solid' 
                borderColor='gray.600' rounded='10px' boxShadow='dark-lg' _hover={{transform: 'scale(1.1)'}}>
                  <Link href='https://dquo-viewtube-app.netlify.app/'>
                    <Image src='viewtube.png' rounded='10px' />
                  </Link>
                  <VStack mt={2}>
                    <Heading mb={5} fontSize='2xl'>ViewTube App</Heading>
                    <Text fontSize={{base: 'sm', sm: 'medium', md: 'lg', lg: 'xl' }}>Search for your favorite youtube videos through ViewTube!</Text>
                  </VStack>
                </Box>

              </Wrap>
            </Center>
          </Stack>

          <Divider />

          {/* Contact Me */}

          <Stack as='section' minH='60vh' mb={20} id='contact'>
            <Heading fontSize='4xl' fontWeight='extrabold' my={20} color='green.300'>Contact Me</Heading>
            <Center>
              <Button as={Link} href='mailto:dwallerofficial@gmail.com' textDecoration='none' colorScheme='linkedin' maxW='10rem' mx={'auto'} mb={20}>Send me an email.</Button>            
            </Center>
            <Center>
              <Link href='https://www.linkedin.com/in/deonte-waller-aa354a206/'>
                <Icon as={FaLinkedin} w='3rem' h='3rem' color={mode('blue', 'whiteAlpha.300')} />
              </Link>
              <Link href='https://www.github.com/DQuo' ml={3}>
                <Icon as={FaGithub} w='3rem' h='3rem' color={mode('blue', 'whiteAlpha.300')} />
              </Link>
            </Center>
          </Stack>
      </Container>
    </Box>
  )
}
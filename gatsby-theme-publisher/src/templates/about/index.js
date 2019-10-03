import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { Box, Text, Heading, Button, Icon } from '@chakra-ui/core'

const About = ({ location }) => {
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="About" />

      <Box maxW="3xl" m="auto" py={4} my={4} px={2}>
        <Heading
          as="h1"
          fontWeight="600"
          fontSize="4rem"
          color="primary"
          lineHeight="1.1"
          mb={4}
        >
          About Us
        </Heading>
        <Text fontSize="md" fontWeight="500" color="gray.400">
        Chuck Norris originally appeared in the "Street Fighter II" video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked bout this "glitch," Norris replied, "That's no glitch.".
        </Text>
      </Box>

      <Box className="row-wrapper" py={2} px={2}>
        <Box maxW="3xl" m="auto">
          <Box
            display={['block', 'grid']}
            gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
            gridColumnGap="4%"
            my={8}
          >
            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                <Icon name="star" size="15px" color="blue.500" /> D'Jasper Probincrux III
              </Heading>
              <Text color="gray.500">
              Would I rather be feared or loved? Easy – both. I want people to be afraid of how much they love me.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                <Icon name="star" size="15px" color="blue.500" /> Hingle McCringleberry
              </Heading>
              <Text color="gray.500">
              You may look around and see two groups here: white collar, blue collar. But I don't see it that way, and you know why not? Because I am collar-blind.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                <Icon name="star" size="15px" color="blue.500" /> Xmus Jaxon Flaxon-Waxon
              </Heading>
              <Text color="gray.500">
              
              Just poopin, you know how I be.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        mt={4}
        maxW="4xl"
        mx="auto"
        px={2}
      >
        <Box display="flex" my={8}>
          <Icon name="phone" color="gray.300" size="50px" mr={4} />
          <div>
            <Heading
              as="h4"
              size="xs"
              mb={1}
              fontWeight="500"
              color="blue.500"
              textTransform="uppercase"
            >
              Contact Us Today
            </Heading>
            <Text color="gray.500">Or don't. I'm kinda busy anyways.</Text>
          </div>
        </Box>

        <Box display="flex" my={8}>
          <Icon name="arrow-right" color="gray.300" size="50px" mr={4} />
          <div>
            <Heading
              as="h4"
              size="xs"
              mb={1}
              fontWeight="500"
              color="blue.500"
              textTransform="uppercase"
            >
              Get Started
            </Heading>
            <Text color="gray.500">Let's take this to the next level.</Text>
          </div>
        </Box>
      </Box>
    </Layout>
  )
}

export default About

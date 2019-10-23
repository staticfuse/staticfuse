import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import {
  Box,
  Text,
  Heading,
  Image,
  PseudoBox,
  IconButton,
} from '@chakra-ui/core'

const About = ({ location }) => {
  // example of data driven templating
  const people = [
    {
      name: "D'Jasper Probincrux III",
      title: 'Founder, Chief Bottleneck',
      img: 'https://www.placecage.com/300/300',
    },
    {
      name: 'Hingle McCringleberry',
      title: 'CFO, Life of the Party',
      img: 'https://www.placecage.com/g/300/300',
    },
    {
      name: 'Xmus Jaxon Flaxon-Waxon',
      title: 'Unpaid Intern, Philosophy Major',
      img: 'https://www.placecage.com/c/300/300',
    },
  ]

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
          Meet the team. If we had a motto, it would be: "always look for treasure maps in unexpected places."
        </Text>
      </Box>

      <Box className="row-wrapper" px={2} mb={4}>
        <Box maxW="3xl" m="auto">
          <Box
            display={['block', 'grid']}
            gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
            gridColumnGap="4%"
            my={2}
            pb={4}
          >
            {people
              ? people.map(person => (
                  <PseudoBox key={person.name} rounded="lg" overflow="hidden" borderWidth="1px" position="relative" mb={[4,2]} textAlign="center">
                    <Image
                      src={person.img}
                      alt="Nick Cage"
                      display="block"
                      w="100%"
                    />
                    <Box p={4}>
                      <Heading
                        as="h4"
                        my={2}
                        fontSize="lg"
                        fontWeight="400"
                        color="gray.600"
                        lineHeight="1"
                      >
                        {person.name}
                      </Heading>
                      <Text fontSize="sm" color="gray.500" pb={2}>
                        {person.title}
                      </Text>
                    </Box>
                    <Box
                      textAlign="center"
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                    >
                      <IconButton
                        variant="ghost"
                        color="gray.400"
                        aria-label="Send email"
                        icon="email"
                      />
                      <IconButton
                        variant="ghost"
                        color="gray.400"
                        aria-label="Connect"
                        icon="external-link"
                      />
                    </Box>
                  </PseudoBox>
                ))
              : null}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default About

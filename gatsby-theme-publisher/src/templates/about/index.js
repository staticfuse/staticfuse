import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { Box, Text, Heading, Button, Icon } from '@chakra-ui/core'
import useSiteMetadata from '../../hooks/use-site-metadata'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const About = ({ location }) => {
  const { title } = useSiteMetadata()

  const doSomething = e => {
    console.log(e)
    alert('Button clicked')
  }

  const imageData = useStaticQuery(graphql`
    {
      file(name: { eq: "hero-bg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="About" />

      <Box bg="gray.800" borderBottom="1px solid #ccc" mb={4}>
        <BackgroundImage
          fluid={imageData.file.childImageSharp.fluid}
          style={{ padding: '4rem .5rem', backgroundPosition: 'top right' }}
        >
          <Box
            m="auto"
            display={['block', 'flex']}
            maxW="4xl"
            justifyContent="space-between"
            align="center"
          >
            <Box w={['100%', '65%']} color="#fff" mb={[6, '0']}>
              <Heading
                as="h1"
                fontWeight="600"
                fontSize="4rem"
                color="#fff"
                lineHeight="1.1"
              >
                About Us
              </Heading>
              <Text color="gray.100" fontSize="md" mb={8} fontWeight="500">
                Welcome to Static Fuse, you'll like it here. To customize this
                template, create a new file at{' '}
                <Text as="span" fontSize="sm" color="blue.200">
                  src/templates/About/index.js
                </Text>{' '}
                in your child theme.
              </Text>
              <Button
                onClick={doSomething}
                variantColor="orange"
                rightIcon="arrow-forward"
                w={['100%', 'auto']}
                mb={[2, '0']}
                rounded="full"
              >
                Get Started
              </Button>
              <Button
                variantColor="gray"
                ml={['0', 4]}
                w={['100%', 'auto']}
                variant="outline"
                rounded="full"
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </BackgroundImage>
      </Box>

      <Box maxW="4xl" m="auto" px={2}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gridColumnGap="4%"
          gridRowGap="4%"
          my="4rem"
        >
          <Box>
            <Heading lineHeight="1.2" color="blue.500" fontSize="2xl">
              Here's something interesting...
            </Heading>
            <Text color="gray.500">
              Cap’n Crunch’s full name is Horatio Magellan Crunch. Sometimes I
              think about his journey to fame as I pour myself a bowl of his
              crunchtastic cereal. I mean, it must be hard being that famous.
              Cartoon celebrities have feelings too.
            </Text>
            <Button rounded="full" variant="outline" variantColor="blue">
              Crunch
            </Button>
          </Box>
          <Box
            as="iframe"
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/GuvAMcsoreI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Box>
        </Box>
      </Box>

      <Box className="row-wrapper" bg="gray.100" py={8} px={2}>
        <Box maxW="4xl" m="auto">
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
                <Icon name="star" size="15px" color="blue.500" /> Thing One
              </Heading>
              <Text color="gray.500">
                We are always improving upon our stellar reputation. It isn't
                hard really, because our reputation is pretty bad. Hey, at least
                we're trying!
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
                <Icon name="email" size="15px" color="blue.500" /> Thing Two
              </Heading>
              <Text color="gray.500">
                You can always contact us if you need anything. We don't check
                emails on days ending in "Y" but we'll get back to you as soon
                as possible.
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
                <Icon name="bell" size="15px" color="blue.500" /> Thing Three
              </Heading>
              <Text color="gray.500">
                This box has a bell icon because I didn't try very hard to make
                this template realistic. You can ring my beeee-e-ell, ring my
                bell.
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

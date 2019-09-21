import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { Box, Text, Heading, Button, Icon } from '@chakra-ui/core'
import useSiteMetadata from '../../hooks/use-site-metadata'

const Home = ({ location }) => {
  const { title } = useSiteMetadata()
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="Home" />

      <Box bg="gray.100" py={12} borderBottom="1px solid #ccc" mb={4} px={2}>
        <Box
          m="auto"
          display={['block', 'flex']}
          maxW="2xl"
          justifyContent="space-between"
          align="center"
        >
          <Box w={['100%', '60%']} color="#fff" mb={[6, '0']}>
            <Heading as="h1" fontWeight="600" fontSize="4rem" color="blue.500">
              {title}
            </Heading>
            <Text color="gray.600" fontSize="md" mb={5}>
              Welcome to Static Fuse. To customize this template, create a new file at <Text as="span" fontSize="sm" color="gray.500">src/templates/home/index.js</Text> in your child theme.
            </Text>
            <Button
              variantColor="blue"
              rightIcon="arrow-forward"
              w={["100%","auto"]}
              mb={[2,"0"]}
            >
              Get Started
            </Button>
            <Button color="gray.600" ml={["0",4]} bg="gray.300" w={["100%","auto"]}>
              Learn More
            </Button>
          </Box>

          <Box
            bg="gray.700"
            borderRadius="15px"
            w={['100%', '36%']}
            h="150px"
            fontFamily="Menlo,Monaco,Courier,monospace"
            color="#b5f4a5"
            p={4}
            m="auto 0"
          >
            &gt; Code is poetry. Except your code, which of course, is crap.
          </Box>
        </Box>
      </Box>

      <Box maxW="2xl" m="auto" py={4} px={2}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
          gridColumnGap="4%"
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
              We are always improving upon our stellar reputation. It isn't hard
              really, because our reputation is pretty bad. Hey, at least we're
              trying!
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
              emails on days ending in "Y" but we'll get back to you as soon as
              possible.
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

        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" borderTop="2px solid #eee" pt={4} mt={4}>
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
              <Text color="gray.500">Get your free consultation.</Text>
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

      </Box>
    </Layout>
  )
}

export default Home

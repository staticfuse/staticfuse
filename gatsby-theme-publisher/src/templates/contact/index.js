import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { Box, Text, Heading, Stack, Input, Textarea, Button } from '@chakra-ui/core'

const Contact = ({ location }) => {
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="Contact" />
      <Box maxW="3xl" m="auto" py={4} my={4} px={2}>
        <Heading
          as="h1"
          fontWeight="600"
          fontSize="4rem"
          color="primary"
          lineHeight="1.1"
          mb={4}
        >
          Contact Us
        </Heading>
        <Text color="gray.400" fontWeight="500" fontSize="md">This form will automatically submit to Netlify forms.</Text>

        <form
          name="contact"
          method="post"
          action="/contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Stack spacing={3}>
            <input type="hidden" name="form-name" value="contact" />
            <input style={{ display: "none" }} name="bot-field" />
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <Textarea placeholder="Message" name="message" />
            <Button variantColor="blue" type="submit">Submit</Button>
          </Stack>
        </form>
      </Box>
    </Layout>
  )
}

export default Contact

import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-metadata'
import { Box, PseudoBox, Spinner, Icon } from '@chakra-ui/core'

const searchQuery = gql`
  query($searchTerm: String!) {
    posts(where: { search: $searchTerm }) {
      nodes {
        id
        title
        uri
      }
    }
  }
`

const SearchResults = ({ searchTerm, showResults }) => {
  const { blogURI } = useSiteMetadata();
  if (!searchTerm || searchTerm === '') return null

  return (
    <>
      <Query query={searchQuery} variables={{ searchTerm }}>
        {({ loading, error, data }) => {
          const { nodes } = data.posts

          if (loading) {
            return (
              <Spinner
                size="xs"
                position="absolute"
                right="25px"
                top="10px"
                color="gray.500"
              />
            )
          }
          if (error) return <Icon name="warning-2" color="orange.500" />

          return (
            <Box
              position="absolute"
              bg="white"
              top="40px"
              minW="300px"
              right="0"
              zIndex="998"
              rounded={2}
              transition="all .3s"
              boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
              display={showResults ? 'block' : 'none'}
            >
              {!nodes.length ? (
                <PseudoBox
                    p={3}
                    fontSize="sm"
                    _hover={{ bg: 'gray.100' }}
                    rounded={2}
                  >
                  No Results
                </PseudoBox>
              ) : (
                nodes.map(post => (
                  <Link to={`${blogURI}/${post.uri}`} key={post.id}>
                    <PseudoBox
                      p={3}
                      fontSize="sm"
                      _hover={{ bg: 'gray.100' }}
                      rounded={2}
                    >
                      {post.title}
                    </PseudoBox>
                  </Link>
                ))
              )}
            </Box>
          )
        }}
      </Query>
    </>
  )
}

export default SearchResults

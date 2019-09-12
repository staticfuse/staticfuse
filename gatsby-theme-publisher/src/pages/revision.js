import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'


const searchQuery = gql`
  query {
    postBy(postId: 145) {
      id
      title
      revisions {
        nodes {
          title
        }
      }
    }
  }
`

const Revision = () => {

  return (
    <>
      <Query query={searchQuery} >
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <div>loading...</div>
            )
          }
          if (error) return <div>error</div>

          console.log(data);


          return (
            <div>success</div>
          )
        }}
      </Query>
    </>
  )
}

export default Revision

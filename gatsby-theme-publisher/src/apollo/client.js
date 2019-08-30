import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import config from '../../config'

export const client = new ApolloClient({
  uri: config.wordPressUrl + '/graphql',
  fetch,
});
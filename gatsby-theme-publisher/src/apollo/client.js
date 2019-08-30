import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import useSiteMetadata from "../hooks/use-site-metadata";

const { wordPressUrl } = useSiteMetadata()

export const client = new ApolloClient({
  uri: wordPressUrl + '/graphql',
  fetch,
});
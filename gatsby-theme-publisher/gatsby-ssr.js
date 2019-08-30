import fetch from 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import config from './config';

export const wrapRootElement = ({ element }) => {
	if (config.dynamicComments) {
		const client = new ApolloClient({
			fetch,
			uri: config.wordPressUrl + '/graphql',
		});

		return <ApolloProvider client={client}>{element}</ApolloProvider>;
	} else {
		return <>{element}</>;
	}
};

import fetch from 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

export const wrapRootElement = ({ element }, themeOptions) => {

	if (themeOptions.dynamicComments) {
		const client = new ApolloClient({
			fetch,
			uri: themeOptions.wordPressUrl + '/graphql',
		});

		return <ApolloProvider client={client}>{element}</ApolloProvider>;
	} else {
		return <>{element}</>;
	}
};

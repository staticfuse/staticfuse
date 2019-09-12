import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createClient } from './src/apollo/client'

export const wrapRootElement = ({ element }, themeOptions) => {
	const client = createClient(themeOptions.wordPressUrl)
	if (themeOptions.dynamicComments) {
		return <ApolloProvider client={client}>{element}</ApolloProvider>;
	} else {
		return <>{element}</>;
	}
};

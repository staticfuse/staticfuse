/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createClient } from './src/apollo/client';
import { PublisherOptions } from './context';
import PublisherDefaultOptions from './src/utils/ThemeOptions';
import { formatPublisherMenu } from './src/utils';

export const wrapRootElement = ({ element }, themeOptions) => {
  const mergedOptions = {
    ...PublisherDefaultOptions,
    ...themeOptions,
  };

  /**
  * Match shap to that of the WP menu.
  */
  mergedOptions.publisherMenuConfig = formatPublisherMenu(mergedOptions.publisherMenuConfig);

  const client = createClient(themeOptions.wordPressUrl);

  return (
    <ApolloProvider client={client}>
      <PublisherOptions.Provider value={mergedOptions}>
        {element}
      </PublisherOptions.Provider>
    </ApolloProvider>
  );
};

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
  * Match shape to that of the WP menu.
  */
  mergedOptions.publisherMenuConfig = formatPublisherMenu(mergedOptions.publisherMenuConfig);

  const client = createClient(themeOptions.wordPressUrl);
  const app = (
    <PublisherOptions.Provider value={mergedOptions}>
      {element}
    </PublisherOptions.Provider>
  );

  if (themeOptions.dynamicComments) {
    return <ApolloProvider client={client}>{app}</ApolloProvider>;
  }

  return app;
};


module.exports = (options) => {
  const config = {
    siteMetadata: {
      ...options,
    },
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: 'content/docs',
          name: 'docs',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: 'content/assets',
          name: 'assets',
        },
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: 'gatsby-remark-responsive-iframe',
              options: {
                wrapperStyle: 'margin-bottom: 1.0725rem',
              },
            },
            'gatsby-remark-prismjs',
            'gatsby-remark-copy-linked-files',
            'gatsby-remark-smartypants',
          ],
        },
      },
      {
        resolve: 'gatsby-transformer-yaml',
      },
      'gatsby-transformer-yaml',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: 'config',
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
    ],
  };

  return config;
};

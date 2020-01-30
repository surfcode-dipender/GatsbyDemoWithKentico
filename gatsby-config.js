module.exports = {
  siteMetadata: {
    title: `Gatsby starter site with Kentico Kontent`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        deliveryClientConfig: {
          projectId: `8073bccf-de90-00b5-983e-be7386ddca95`,
        },
        languageCodenames: [
          `default`,
          `de-DE`,
          `cs-CZ`,
        ]
      }
    }
  ]
};

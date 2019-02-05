module.exports = {
  siteMetadata: {
    title: `RAV`,
    description: `Ruxandra Vasilescu website. A former hair stylist, now a React Developer. React is a frontend library, which runs in the browser`,
    keywords: `react developer, react native, react js, frontend library`,
    author: `@ruxilescu`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
     
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `##00CCFF`,
        theme_color: `##00CCFF`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
     'gatsby-plugin-offline',
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `src`,
         path: `${__dirname}/src/data`,
       },
     },
     `gatsby-transformer-json`,
  ],
}

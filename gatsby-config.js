module.exports = {
  siteMetadata: {
    title: `Digital SalonHub`,
    description: `Websites and Digital Marketing for Beauty Salons and Medical Spas`,
    keywords: `salon marketing, medical spa marketing, beauty salons websites, medical spa website`,
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
        background_color: `#006666`,
        theme_color: `#006666`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
     resolve:`gatsby-plugin-typography`,
     options: {
       pathToConfigModule:`src/utils/typography`, 
     } 
    },
    'gatsby-plugin-styled-components',
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
  
    // 'gatsby-plugin-offline',
     //{
      // resolve: `gatsby-source-filesystem`,
       //options: {
      //  name: `src`,
       //  path: `${__dirname}/src/data`,
      // },
     //  },
     // `gatsby-transformer-json`,
  ],
}

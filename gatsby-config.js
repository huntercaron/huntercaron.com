module.exports = {
  siteMetadata: {
    title: `Hunter Caron`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
         trackingId: 'UA-60215266-1'
       },
     },
     `gatsby-transformer-remark`,
     `gatsby-plugin-netlify`
  ],
}

module.exports = {
  siteMetadata: {
    title: "Tanner Scadden Portfolio",
    author: "Tanner Scadden",
    description: "Tanner Scadden Web Developer Portfolo"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-favicon',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tanner-Scadden-Portfolio',
        short_name: 'Tanner',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/t-logo.png', // This path is relative to the root of the site.
      },
    }
  ]
}

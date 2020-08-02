module.exports = {
  siteMetadata: {
    title: 'Portafolio Valentino Torres',
    description: 'Valentino Torres Descripción',
    author: 'ValentinoTorresDev'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portafolio Valentino Torres',
        short_name: 'Valentino Torres',
        lang: 'es',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}

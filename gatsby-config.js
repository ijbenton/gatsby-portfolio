module.exports = {
  siteMetadata: {
    title: `Ian Benton | Web/Native Developer`,
    description: `I'm Ian Benton, a Web/Native Developer from Irvine, CA`,
    author: `Ian`,
    site: `bentondev.netlify.app`,
    social: {
      github: `ijbenton`,
      instagram: `bentondev`,
      linkedin: `bentondev`,
      email: `bentonian1@gmail.com`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `raleway\:200,400,400i,600,600i,700`,
          `roboto\:200,400,400i,600,600i,700`,
        ],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/content/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-me`,
        path: `${__dirname}/src/content/about-me`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bentondev-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#028090`,
        theme_color: `#028090`,
        display: `minimal-ui`,
        icon: `src/images/bentondev-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

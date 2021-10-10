module.exports = {
  siteMetadata: {
    title: `olubunmi-obalade`,
    description: `A website for the Reverend Dr. Olubunmi Obalade.`,
    author: {
      name: 'Ojo Oluwasetemi',
      content:
        'I&apos; m a Fullstack Developer. I make all sort of stuff with Typescript, JavaScript, React, Nodejs. You can find my work on GitHub and CodeSandbox. I enjoy teaching and sharing about the things I build. Check out my writing.I help people learn more about web development.',
    },
    social: {
      github: 'https://github.com/Oluwasetemi',
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
        // Puts script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: "Kevin's Blog",
    description:
      "Kevin Simpson discusses tech, coding the front end, maker stuff, and games",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayout: {
          default: require.resolve("./src/components/Layout/Layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
  ],
}

import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            author
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => {
    return {
      title: post.frontmatter.title,
      author: post.frontmatter.author,
      slug: post.frontmatter.slug,
      excerpt: post.excerpt,
    }
  })
}

export default usePosts

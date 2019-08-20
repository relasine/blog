import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout/Layout"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <Img fluid={featuredImgFluid} />

      <p>Posted by {post.frontmatter.author}</p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export default PostTemplate

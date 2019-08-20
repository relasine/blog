import React from "react"
import Layout from "../components/Layout/Layout"
import usePosts from "../hooks/usePosts"
import { Link } from "gatsby"

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      <div>Hello world!</div>
      {posts.map(post => {
        return (
          <article key={post.slug}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={post.slug}>Read more...</Link>
          </article>
        )
      })}
    </Layout>
  )
}

import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PostTemplate = props => {
  const post = props.data.contentfulProject
  return (
    <Layout title={`${post.title} - ${post.summary}`}>
      <section className="space-lg">
        <hgroup>
          <h1>{post.title}</h1>
          <h2>{post.summary}</h2>
        </hgroup>
      </section>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object,
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      contentful_id
      title
      summary
      hero {
        fluid(maxWidth: 980, quality: 75) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

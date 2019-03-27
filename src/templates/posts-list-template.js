import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import Feed from '../components/Feed';

const PostsListTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout title={`Posts - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Posts">
        <Feed edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PostsListQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default PostsListTemplate;

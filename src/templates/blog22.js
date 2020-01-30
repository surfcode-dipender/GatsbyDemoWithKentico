import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';


const BlogReference = ({data}) => {
  const item = data.allKontentItemBlogs.nodes[0].elements;

  return (
    <Layout>
      <div>
       
          <table>
            <tbody>
            <tr>
              <th>Title:</th>
              <td>{item.title.value}</td>
            </tr>
            <tr>
              <th>URL:</th>
              <td>{item.post_url.value}</td>
            </tr>
            <tr>
              <th>Content:</th>
              <td>
               {item.content.value}
               
             </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};




export default BlogReference;
export const query = graphql`
query speakingEngagementQuery($slug: String!){
    allKontentItemBlogs(filter: {elements: {post_url: {value: {eq: $slug}}}}) {
      nodes {
        elements {
          content {
            value
          }
          post_url {
            value
          }
          title {
            value
          }
        }
      }
    }
  }
`;
BlogReference.propTypes = {
  data: PropTypes.object,
};

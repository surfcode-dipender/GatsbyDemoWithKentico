import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Index = ({data}) => {
  //const union = data.allKontentItemBlogpostReference.edges;
console.log(data.allKontentItemBlogs)
  const items = data.allKontentItemBlogs.edges.map(({node}) => {
    console.log(1)
    return (      
      <li key={node.id}>
        <a href={node.elements.post_url.value}>
        {node.elements.title.value}
        </a>
        <div 
          dangerouslySetInnerHTML={{
            __html : node.elements.content.value
          }}
        >
       
        </div>
       
      </li>
    );
     
  });

  return (
    <Layout>
      <div>
        {items}
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  {
    allKontentItemBlogs {
      edges {
        node {
          id
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
  }
`;

Index.propTypes = {
  data: PropTypes.object,
};
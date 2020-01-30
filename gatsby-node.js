const path = require(`path`);
const _ = require(`lodash`);
const kontentItemTypeIdentifier = `KontentItem`;
const blogReferenceTypeIdentifier = `Blogs`;

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  
  if (_.has(node, `internal.type`) && _.isString(node.internal.type) && node.internal.type.startsWith(kontentItemTypeIdentifier)) {
    let withDetailView = false;
    let templateName;
    console.log(node.internal.type)
    if (node.internal.type === `${kontentItemTypeIdentifier}${blogReferenceTypeIdentifier}`) {
      templateName = `blog22`;
      withDetailView = true;
    }   
console.log(node)
console.log(node.elements.post_url.value)
console.log(templateName)
    if (withDetailView) {
      createNodeField({
        node,
        name: `templateName`,
        value: templateName
      });
        
        
      createNodeField({
        node,
        name: `language`,
        value: node.system.language
      });
      createNodeField({
        node,
        name: `slug`,
        value: node.elements.post_url.value
      });
    }

    createNodeField({
      node,
      name: `language`,
      value: node.system.language
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve) => {
    graphql(`
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
    `).then(result => {
      
      const union = result.data.allKontentItemBlogs.edges;
      
      union.forEach(( node ) => {
        createPage({
          path: `/${node.node.elements.post_url.value}`,
          component: path.resolve(`./src/templates/blog22.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            templateName: `blog22`,
            slug: node.node.elements.post_url.value
          },
        });
      });
      resolve();
    });
  });
};
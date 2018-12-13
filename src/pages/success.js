import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';
import PostPreview from '../components/post/PostPreview';

const SuccessPage = ({ data, location }) => {
    const siteTitle = get(data, 'site.siteMetadata.title');
    const siteDescription = get(data, 'site.siteMetadata.description');
    const posts = get(data, 'allMarkdownRemark.edges');

    return (
        <Layout location={location} title={siteTitle}>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: siteDescription }]}
                title={`Success - ${siteTitle}`}
            />
            <PageHeader>
                <h1>Success</h1>
            </PageHeader>
            <p>Thanks for reaching out! I'll get back to you as soon as possible. In the meantime, checkout the latest article from the blog:</p>
            <h2>Latest article</h2>
            <hr />
            {posts.map(({ node }) => (
                <PostPreview
                    key={node.fields.slug}
                    author={node.frontmatter.author}
                    category={node.frontmatter.category}
                    condensed
                    content={node.frontmatter.summary || node.excerpt}
                    date={node.frontmatter.date}
                    slug={node.fields.slug}
                    tags={node.frontmatter.tags}
                    title={
                        get(node, 'frontmatter.title') || node.fields.slug
                    }
                />
            ))}
        </Layout>
    );
};

export default SuccessPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { published: { eq: true } } }
            limit: 1
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        category
                        summary
                        tags
                        title
                    }
                }
            }
        }
    }
`;

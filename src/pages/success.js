import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';

const SuccessPage = ({ data, location }) => {
    const siteTitle = get(data, 'site.siteMetadata.title');
    const siteDescription = get(data, 'site.siteMetadata.description');
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
            <p>Thanks for reaching out! I'll get back to you as soon as possible.</p>
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
    }
`;

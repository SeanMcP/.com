import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import { LifeStory } from '../components/text/Text';
import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';

const LifeStoryPage = ({ data, location }) => {
    const siteTitle = get(data, 'site.siteMetadata.title');
    const siteDescription = get(data, 'site.siteMetadata.description');
    return (
        <Layout location={location} title={siteTitle}>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: siteDescription }]}
                title={`Life story - ${siteTitle}`}
            />
            <PageHeader>
                <h1>Life story</h1>
            </PageHeader>
            <LifeStory />
        </Layout>
    );
};

export default LifeStoryPage;

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

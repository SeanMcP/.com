import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
.typography li {
    line-height: 125%;
}

.typography li:not(:last-of-type) {
    margin-bottom: 0.5rem;
}

.typography blockquote {
    background: rgba(0, 0, 0, 0.025);
    border-left: 0.5rem solid ${p => p.theme.primary};
    border-radius: 0.5rem;
    font-style: italic;
    font-size: 1.25rem;
    font-weight: 500;
    margin: 1rem 0;
    padding: 1rem;
}

.typography blockquote > * {
    line-height: 150%;
}

.typography blockquote > *:first-child {
    margin-top: 0;
}

.typography blockquote > *:last-child {
    margin-bottom: 0;
}

.gatsby-resp-image-wrapper {
    border: 1px solid ${p => p.theme.secondary};
    margin-bottom: 2rem;
    margin-top: 2rem;
    max-width: initial !important;
}

/* .footnotes li > * {
    display: inline;
} */
`

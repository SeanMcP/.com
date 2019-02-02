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
    border-left: 8px solid ${p => p.theme.primary};
    font-style: italic;
    margin: 1rem 0;
    padding: 1rem;
}

.typography blockquote > * {
    line-height: 125%;
}

.typography blockquote > *:first-child {
    margin-top: 0;
}

.typography blockquote > *:last-child {
    margin-bottom: 0;
}

.gatsby-resp-image-wrapper {
    max-width: initial !important;
}
`

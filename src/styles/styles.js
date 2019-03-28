import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
    a, a:visited {
        color: ${props => props.theme.primary_dark};
        text-decoration: none;
    }

    a:hover, a:active { text-decoration: underline }

    body {
        background: ${props => props.theme.secondary_light};
        color: ${props => props.theme.text};
    }

    hr {
        background: ${props => props.theme.secondary};
    }
`

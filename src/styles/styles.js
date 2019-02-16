import { createGlobalStyle } from 'styled-components'

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

    *:focus {
        outline: none;
        box-shadow: 0 0 0 4px ${p => p.theme.accent};
    }
`

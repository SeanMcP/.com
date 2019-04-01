import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
    body {
        background: ${p => p.theme.secondary_light};
        color: ${p => p.theme.text};
    }

    a, a:visited {
        color: ${p => p.theme.primary_dark};
        text-decoration: none;
    }

    a:hover, a:active { text-decoration: underline }

    hr {
        background: ${p => p.theme.secondary};
    }
`

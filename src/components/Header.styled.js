import styled from 'styled-components/macro'

export const Header = styled.header`
  background: ${p => p.theme.primary_extra_dark};
  color: ${p => p.theme.text_inverse};
  padding: 1rem 0;

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    text-align: center;
  }

  a {
    color: ${p => p.theme.text_inverse};
    text-decoration: none;
  }

  a:hover {
    color: ${p => p.theme.accent};
    /* text-decoration: underline;s */
  }
`

export const H1 = styled.h1`
  display: inline;
  font-size: 1rem;

  ::after {
    content: 'herson';
  }

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    display: block;
    font-size: 1.5rem;

    ::after {
      content: initial;
    }
  }
`

// export const FlexBox = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: space-between;
// `

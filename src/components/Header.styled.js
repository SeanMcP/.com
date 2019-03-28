import styled from 'styled-components/macro'

export const Header = styled.header`
  margin-top: 2rem;
  text-align: center;
`

export const H1 = styled.h1`
  /* margin-bottom: 0; */

  ::after {
    content: 'herson';
  }

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
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

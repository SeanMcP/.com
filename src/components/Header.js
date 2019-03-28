import React from 'react'
import { Link } from 'gatsby'

import MainNav from './MainNav'
import ContentContainer from './ContentContainer'

import * as S from './Header.styled'

const Header = () => {
  return (
    <S.Header>
      <ContentContainer>
        {/* <S.FlexBox> */}
        <Link to={'/'}>
          <S.H1>Sean McP</S.H1>
        </Link>
        <MainNav />
        {/* </S.FlexBox> */}
      </ContentContainer>
      <hr />
    </S.Header>
  )
}

export default Header

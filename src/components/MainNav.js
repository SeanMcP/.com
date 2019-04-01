import React from 'react'

const links = ['About', 'Articles', 'Contact']

import * as S from './MainNav.styled'

const MainNav = () => {
  return (
    <S.Nav>
      {links.map(link => (
        <S.Link key={link} to={`/${link.toLowerCase()}/`}>
          {link}
        </S.Link>
      ))}
    </S.Nav>
  )
}

export default MainNav

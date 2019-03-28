import React from 'react'
import { Link } from 'gatsby'

const links = ['About', 'Articles', 'Contact']

import * as S from './MainNav.styled'

const MainNav = () => {
  return (
    <nav>
      {links.map(link => (
        <S.Link key={link} to={`/${link.toLowerCase()}/`}>
          {link}
        </S.Link>
      ))}
    </nav>
  )
}

export default MainNav

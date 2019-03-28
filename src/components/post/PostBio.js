import React from 'react'
import styled from 'styled-components/macro'

import Icon from '../common/Icon'
import Thumbnail from '../common/Thumbnail'

const socialLinks = [
  {
    href: 'https://github.com/seanmcp',
    icon: 'GitHub',
    name: 'GitHub'
  },
  {
    href: 'https://twitter.com/_seanmcp',
    icon: 'Twitter',
    name: 'Twitter'
  },
  {
    href: 'https://linkedin.com/in/seanmcp',
    icon: 'Linkedin',
    name: 'LinkedIn'
  }
]

const StyledSection = styled.section`
  display: flex;
  margin-bottom: 1rem;

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    flex-direction: column;
  }
`

const StyledThumbnail = styled(Thumbnail)`
  height: 5rem;
  margin-right: 1rem;

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    height: initial;
    margin: 0 auto 1rem;
    width: 8rem;
  }
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0;

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`

const StyledLi = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 0;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    &:not(:last-child) {
      margin: 0 0 1rem;
    }
  }
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const StyledDiv = styled.div`
  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }
`

const PostBio = () => {
  const links = socialLinks.map(platform => {
    return (
      <StyledLi key={platform.name}>
        <StyledIcon icon={platform.icon} />
        <a href={platform.href}>{platform.name}</a>
      </StyledLi>
    )
  })
  return (
    <StyledSection>
      <StyledThumbnail />
      <StyledDiv>
        <p>
          My name is <strong>Sean McPherson</strong>, and I am a software
          developer in Atlanta, GA. I write about web development, JavaScript,
          React, and occasionally some other things.
        </p>
        <StyledUl>{links}</StyledUl>
      </StyledDiv>
    </StyledSection>
  )
}

export default PostBio

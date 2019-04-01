import React from 'react'

import ExternalLink from '../common/ExternalLink'

import * as S from './ArticleBio.styled'

const socialLinks = [
  {
    href: 'https://github.com/seanmcp',
    name: 'GitHub'
  },
  {
    href: 'https://twitter.com/_seanmcp',
    name: 'Twitter'
  },
  {
    href: 'https://linkedin.com/in/seanmcp',
    icon: 'Linkedin',
    name: 'LinkedIn',
    labelName: 'Linked In'
  }
]

const ArticleBio = () => {
  const links = socialLinks.map(platform => {
    return (
      <S.Li key={platform.name}>
        <S.Icon icon={platform.icon || platform.name} />
        <ExternalLink
          href={platform.href}
          aria-label={`Follow me on ${platform.labelName || platform.name}`}
        >
          {platform.name}
        </ExternalLink>
      </S.Li>
    )
  })
  return (
    <S.Section>
      <S.Thumbnail />
      <S.Content>
        <p>
          My name is <strong>Sean McPherson</strong>, and I am a software
          developer in Atlanta, GA. I write about web development, JavaScript,
          React, and occasionally some other things.
        </p>
        <S.Ul>{links}</S.Ul>
      </S.Content>
    </S.Section>
  )
}

export default ArticleBio

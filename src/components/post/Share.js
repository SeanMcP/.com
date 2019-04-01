import React from 'react'

import * as S from './Share.styled'

const Share = ({ title, url }) => {
  function createMessage(username = 'Sean McP') {
    return `“${title}” by ${username}  ̶ ${url}`
  }
  return (
    <S.Container>
      <S.Header>
        <S.Icon icon="Share2" />
        <span>Share this article:</span>
      </S.Header>
      <S.Nav>
        <S.ExternalLink
          href={`https://twitter.com/intent/tweet?text=${createMessage(
            '@_seanmcp'
          )}`}
          aria-label="Share this article on Twitter"
        >
          <S.Icon icon="Twitter" />
          Twitter
        </S.ExternalLink>
        <S.ExternalLink
          href={`https://reddit.com/submit?url=${url}`}
          aria-label="Share this article on Reddit"
        >
          <S.Icon icon="ArrowUp" />
          Reddit
        </S.ExternalLink>
        <S.ExternalLink
          href={`https://linkedin.com/shareArticle?url=${url}`}
          aria-label="Share this article on Linked In"
        >
          <S.Icon icon="Linkedin" />
          LinkedIn
        </S.ExternalLink>
        <S.ExternalLink
          href={`https://facebook.com/sharer/sharer.php?u=${url}`}
          aria-label="Share this article on Facebook"
        >
          <S.Icon icon="Facebook" />
          Facebook
        </S.ExternalLink>
      </S.Nav>
    </S.Container>
  )
}

export default Share

import React from 'react'

import SocialShareIcon from '../common/SocialShareIcon'
import * as S from './Share.styled'

const Share = ({ title, url }) => {
  function createMessage(username = 'Sean McP') {
    return `“${title}” by ${username}  ̶ ${url}`
  }
  return (
    <S.Container>
      <S.Header>
        <S.Icon icon="Share2" />
        <S.Message>Share this article</S.Message>
      </S.Header>
      <S.Nav>
        <SocialShareIcon
          platform="twitter"
          href={`https://twitter.com/intent/tweet?text=${createMessage(
            '@_seanmcp'
          )}`}
        />
        <SocialShareIcon
          platform="reddit"
          href={`https://reddit.com/submit?url=${url}`}
        />
        <SocialShareIcon
          platform="linkedin"
          href={`https://linkedin.com/shareArticle?url=${url}`}
        />
        <SocialShareIcon
          platform="facebook"
          href={`https://facebook.com/sharer/sharer.php?u=${url}`}
        />
      </S.Nav>
    </S.Container>
  )
}

export default Share

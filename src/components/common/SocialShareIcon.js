import React from 'react'
import _Icon from './Icon'
import _ExternalLink from './ExternalLink'

import * as S from './SocialShareIcon.styled'

const BRAND_INFO = {
  facebook: {
    color: '#4267b2',
    icon: 'Facebook'
  },
  linkedin: {
    color: '#0077b5',
    icon: 'Linkedin',
    labelName: 'Linked In',
    name: 'LinkedIn'
  },
  reddit: {
    color: '#FF4500',
    icon: 'ArrowUp',
    name: 'Reddit'
  },
  twitter: {
    color: '#1DA1F2',
    icon: 'Twitter'
  }
}

const SocialShareIcon = ({ platform, ...props }) => {
  const brand = BRAND_INFO[platform.toLowerCase()]
  return (
    <S.ExternalLink
      aria-label={`Share this article on ${brand.labelName ||
        brand.name ||
        brand.icon}`}
      {...props}
    >
      <S.Icon icon={brand.icon} color={brand.color} size={24} />
      <S.OuterCircle color={brand.color} />
      <S.InnerCircle color={brand.color} />
      <S.Name color={brand.color}>{brand.name || brand.icon}</S.Name>
    </S.ExternalLink>
  )
}

export default SocialShareIcon

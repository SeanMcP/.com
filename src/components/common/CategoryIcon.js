import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  border-radius: ${p => (p.rounded ? '0.5rem' : 'none')};
  width: 100%;
`

const defaultIcon = 'miscellaneous'

const CategoryIcon = ({ category = defaultIcon, rounded = false }) => {
  const availableIcons = [
    'accessibility',
    'advice',
    'gatsby',
    'growth',
    'javascript',
    'meta',
    'miscellaneous',
    'python',
    'react'
  ]
  const filename = availableIcons.includes(category) ? category : defaultIcon
  return (
    <StyledImg
      src={require(`../../assets/icons/${filename}.png`)}
      alt={`${category} icon`}
      rounded={rounded}
    />
  )
}

export default CategoryIcon

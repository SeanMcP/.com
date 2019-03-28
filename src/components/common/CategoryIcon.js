import React from 'react'
import styled from 'styled-components/macro'

const StyledImg = styled.img`
  border-radius: ${p => (p.rounded ? '0.5rem' : 'none')};
  width: ${p => (p.width ? p.width : '100%')};
`

const defaultIcon = 'miscellaneous'

const CategoryIcon = ({ category = defaultIcon, rounded = false, width }) => {
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
      width={width}
    />
  )
}

export default CategoryIcon

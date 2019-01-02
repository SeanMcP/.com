import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  border-radius: 40rem;
`

const Thumbnail = props => {
  return (
    <StyledImg
      alt={"An illustration of Sean McPherson's head"}
      src={require('../../assets/seanmcp.png')}
      {...props}
    />
  )
}

export default Thumbnail

import React from 'react'
import PropTypes from 'prop-types'
import * as AllIcons from 'react-feather'

const Icon = ({ ariaLabel, className, icon, size }) => {
  const I = AllIcons[icon]
  return (
    <I
      aria-label={ariaLabel ? ariaLabel : undefined}
      aria-hidden={ariaLabel ? undefined : true}
      className={className}
      size={size}
    />
  )
}

Icon.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.number
}

Icon.defaultProps = {
  className: '',
  size: 20
}

export default Icon

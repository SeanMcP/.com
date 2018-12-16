import React from 'react'
import PropTypes from 'prop-types'
import { Folder } from 'react-feather'

import Icon from './Icon'
import SearchLink from './SearchLink'

const CategoryLink = ({ category, hideIcon, lede, modifier }) => {
  return (
    <div className={`CategoryLink ${modifier ? `-${modifier}` : ''}`}>
      {!hideIcon && (
        <Icon className={'_icon'} icon={'Folder'} />
        // <Folder className={'_icon'} size={20} />
      )}
      <SearchLink queryKey={'categories'} queryValue={category} />
    </div>
  )
}

CategoryLink.propTypes = {
  category: PropTypes.string.isRequired,
  hideIcon: PropTypes.bool,
  lede: PropTypes.string,
  modifier: PropTypes.string
}

export default CategoryLink

import React from 'react'
import PropTypes from 'prop-types'

const ArticleDate = ({ date }) => {
  return (
    <span>
      <time>{date}</time>
    </span>
  )
}

ArticleDate.propTypes = {
  date: PropTypes.string.isRequired
}

export default ArticleDate

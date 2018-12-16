import React from 'react'
import PropTypes from 'prop-types'

import CategoryLink from './CategoryLink'

const ArticleCategories = ({ list }) => {
  return (
    <section className={'ArticleCategories'}>
      <span className={'_title'}>Categories:</span>
      <ul className={'_list'}>
        {list.map(category => (
          <li className={'_list-item'} key={category.fieldValue}>
            <CategoryLink category={category.fieldValue} hideIcon />
          </li>
        ))}
      </ul>
    </section>
  )
}

ArticleCategories.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ArticleCategories

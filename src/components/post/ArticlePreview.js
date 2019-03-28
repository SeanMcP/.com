import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ArticleDate from './ArticleDate'

import * as S from './ArticlePreview.styled'
import CategoryLink from '../common/CategoryLink'

// const ArticlePreview = ({ category, date, slug, summary, title, update }) => (
//   <S.Article>
//     <S.DetailsDiv>
//       <ArticleDate date={update || date} /> in{' '}
//       <CategoryLink category={category} />
//     </S.DetailsDiv>
//     <Link to={slug}>
//       <S.H3>{title}</S.H3>
//     </Link>
//     {summary && <S.SummaryP>{summary}</S.SummaryP>}
//   </S.Article>
// )
const ArticlePreview = ({
  excerpt,
  fields: { slug },
  frontmatter: { category, date, title, update }
}) => (
  <S.Article>
    <S.DetailsDiv>
      <ArticleDate date={update || date} /> in{' '}
      <CategoryLink category={category} />
    </S.DetailsDiv>
    <Link to={slug}>
      <S.H3>{title}</S.H3>
    </Link>
    {excerpt && <S.SummaryP>{excerpt}</S.SummaryP>}
  </S.Article>
)

// ArticlePreview.propTypes = {
//   date: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   update: PropTypes.string
// }

export default ArticlePreview

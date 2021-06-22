import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import * as R from 'ramda'

import {getCategories, getActiveCategoryId} from 'common/selectors'

import Wrapper from 'components/categories/Wrapper'
import H4 from 'components/categories/H4'
import ListGroup from 'components/categories/ListGroup'
import LinkAllCategories from 'components/categories/LinkAllCategories'
import LinkCategory from 'components/categories/LinkCategory'

const Categories = ({categories, activeCategoryId}) => {
  console.log('activeCategory', activeCategoryId)
  const getActiveState = R.propEq('id', activeCategoryId)

  const renderCategory = (category, index) => {
    const linkCategory =
      getActiveState !== undefined ? `/categories/${category.id}/` : '/'

    return (
      <LinkCategory to={linkCategory} key={index}>
        {category.name}
      </LinkCategory>
    )
  }

  const renderAllCategory = () => {
    return (
      <LinkAllCategories to="/" exact>
        All
      </LinkAllCategories>
    )
  }

  return (
    <Wrapper>
      <H4>Brand</H4>
      <ListGroup>
        {renderAllCategory()}
        {categories.map((category, index) => renderCategory(category, index))}
      </ListGroup>
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps),
})

export default compose(withRouter, connect(mapStateToProps, null))(Categories)

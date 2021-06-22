import React from 'react'
import {connect} from 'react-redux'

import {getTotalBasketCount, getTotalBasketPrice} from 'common/selectors'

import Dropdown from 'components/backetCart/Dropdown'
import Link from 'components/backetCart/Link'

const BasketCart = ({totalBasketCount, totalPrice}) => {
  return (
    <div>
      <Dropdown>
        <Link to="/basket">
          {/*<i className="fa fa-fa-shopping-cart" />*/}
          <i className="fas fa-shopping-cart" />
          <span>
            {' '}
            {totalBasketCount} item(s) - ${totalPrice}
          </span>
        </Link>
      </Dropdown>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalBasketPrice(state),
  }
}

export default connect(mapStateToProps, null)(BasketCart)

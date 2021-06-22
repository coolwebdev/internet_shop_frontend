import React from 'react'

import BasketCart from 'components/backetCart'
import Search from 'components/search'
import Categories from 'components/categories'

const Sidebar = () => (
  <div>
    <BasketCart />
    <Search />
    <Categories />
  </div>
)

export default Sidebar
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Phones from 'containers/phones'
import Phone from 'containers/phone'
import Basket from 'containers/basket'
import NotFound from 'containers/notFound'
import GlobalStyle from '../global-styles'

export default (
  <>
    <Switch>
      <Route path="/" component={Phones} exact />
      <Route path="/categories/:id" component={Phones} />
      <Route path="/phones/:id" component={Phone} />
      <Route path="/basket" component={Basket} />
      <Route path="" component={NotFound} />
    </Switch>
    <GlobalStyle />
  </>
)

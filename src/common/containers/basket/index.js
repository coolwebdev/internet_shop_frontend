import React from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'

import {getBasketPhonesWithCount, getTotalBasketPrice} from 'common/selectors'
import {removePhoneFromBasket, basketCheckout, cleanBasket} from 'actions'

import TableResponsive from 'containers/basket/TableResponsive'
import TableBordered from 'containers/basket/TableBordered'
import ItemCheckout from 'containers/basket/ItemCheckout'
import ImgThumbnail from 'containers/basket/ImgThumbnail'
import FirstColumn from 'containers/basket/FirstColumn'
import Td from 'containers/basket/Td'
import DeleteCart from 'containers/basket/DeleteCart'
import Wrapper from 'containers/basket/Wrapper'
import Container from 'components/container'
import Row from 'components/row'
import Column3 from 'components/column3'
import Column9 from 'components/column9'
import Link from 'containers/basket/Link'
import ButtonClean from 'containers/basket/ButtonClean'
import ButtonCheckout from 'containers/basket/ButtonCheckout'
import TotalPrice from './TotalPrice'
import RowTotal from './RowTotal'

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket,
}) => {
  const isBasketEmpty = R.isEmpty(phones)

  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && <div>Your shopping cart is empty</div>}

        <TableResponsive>
          <TableBordered>
            <tbody>
              {phones.map((phone, index) => (
                <ItemCheckout key={index}>
                  <FirstColumn>
                    <ImgThumbnail src={phone.image} alt={phone.name} />
                  </FirstColumn>
                  <Td>{phone.name}</Td>
                  <Td>${phone.price}</Td>
                  <Td>{phone.count}</Td>
                  <Td>
                    <DeleteCart
                      onClick={() => removePhoneFromBasket(phone.id)}
                    />
                  </Td>
                </ItemCheckout>
              ))}
            </tbody>
          </TableBordered>
        </TableResponsive>
        {R.not(isBasketEmpty) && (
          <RowTotal>
            <TotalPrice>
              <b>Total:</b>${totalPrice}
            </TotalPrice>
          </RowTotal>
        )}
      </div>
    )
  }

  const renderSidebar = () => (
    <div>
      <Link to="/">
        {/*<span className="glyphicon glyphicon-info-sign" />{' '}*/}
        <span>
          <i className="fas fa-info-circle" />{' '}
        </span>
        <span>Continue shopping!</span>
      </Link>
      {R.not(isBasketEmpty) && (
        <div>
          <ButtonClean onClick={cleanBasket}>
            {/*<span className="glyphicon glyphicon-trash" /> Clear cart*/}
            <span>
              <i className="fas fa-trash-alt" /> Clear cart
            </span>
          </ButtonClean>
          <ButtonCheckout onClick={() => basketCheckout(phones)}>
            {/*<span className="glyphicon glyphicon-envelope" /> Checkout*/}
            <span>
              <i className="fas fa-envelope" /> Checkout
            </span>
          </ButtonCheckout>
        </div>
      )}
    </div>
  )

  return (
    <Wrapper>
      <Container>
        <Row>
          <Column9>{renderContent()}</Column9>
          <Column3>{renderSidebar()}</Column3>
        </Row>
      </Container>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state),
  }
}

const mapDispatchToProps = {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket,
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

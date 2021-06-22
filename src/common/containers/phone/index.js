import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'

import {fetchPhoneById, addPhoneToBasket} from 'actions'
import {getPhoneById} from 'common/selectors'
import BasketCart from 'components/backetCart'

import Column from 'containers/phone/Column'
import DetailsTitle from 'containers/phone/DetailsTitle'
import DetailsInfo from 'containers/phone/DetailsInfo'
import Wrapper from 'containers/phone/Wrapper'
import Thumbnail from 'containers/phone/Thumbnail'
import Column3 from 'components/column3'
import Column6 from 'containers/phone/Column6'
import Column9 from 'components/column9'
import Container from 'containers/phone/Container'
import Row from 'components/row'
import Image from 'containers/phone/Image'
import CaptionFull from 'containers/phone/CaptionFull'
import Lead from 'containers/phone/Lead'
import FormGroup from 'containers/phone/FormGroup'
import H4Price from 'containers/phone/H4Price'
import Link from 'containers/phone/Link'
import ButtonCart from 'containers/phone/ButtonCart'

const Phone = ({fetchPhoneById, addPhoneToBasket, phone, match}) => {
  useEffect(() => {
    fetchPhoneById(match.params.id)
  }, [fetchPhoneById, match])

  const renderFields = () => {
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory',
      ])
    )(phone)

    return columnFields.map(([key, value]) => (
      <Column key={key}>
        <DetailsTitle>
          <p>{key}</p>
        </DetailsTitle>
        <DetailsInfo>{value}</DetailsInfo>
      </Column>
    ))
  }

  const renderContent = () => {
    return (
      <Thumbnail>
        <Row>
          <Column6>
            <Image src={phone.image} alt={phone.name} />
          </Column6>
          <Column6>{renderFields()}</Column6>
        </Row>
        <CaptionFull>
          <H4Price>${phone.price}</H4Price>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </CaptionFull>
      </Thumbnail>
    )
  }

  const renderSidebar = () => {
    return (
      <div>
        <Lead>Quick shop</Lead>
        <BasketCart />
        <FormGroup>
          <h1>{phone.name}</h1>
          <h2>${phone.price}</h2>
        </FormGroup>
        <Link to="/">Back to store</Link>
        <ButtonCart type="button" onClick={() => addPhoneToBasket(phone.id)}>
          Add to cart
        </ButtonCart>
      </div>
    )
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <Column9>{phone && renderContent()}</Column9>
          <Column3>{phone && renderSidebar()}</Column3>
        </Row>
      </Container>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    phone: getPhoneById(state, state.phonePage.id),
  }
}

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket,
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone)

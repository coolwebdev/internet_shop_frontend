import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'
import {Link} from 'react-router-dom'

import {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories,
} from 'actions'
import {getPhones} from 'common/selectors'
import Layout from 'containers/layout'

import Row from 'components/row'
import RenderPhoneWrapper from 'containers/phones/RenderPhoneWrapper'
import Column12 from 'containers/phones/Column12'
import Thumbnail from 'containers/phones/Thumbnail'
import Image from 'containers/phones/Image'
import Caption from 'containers/phones/Caption'
import H4Price from 'containers/phones/H4Price'
import H4 from 'containers/phones/H4'
import ItemButton from 'containers/phones/ItemButton'
import ButtonBuyNow from 'containers/phones/ButtonBuyNow'
import LinkMoreInfo from 'containers/phones/LinkMoreInfo'
import ButtonLoadMore from 'containers/phones/ButtonLoadMore'

const Phones = ({
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories,
  phones,
}) => {
  useEffect(() => {
    fetchPhones()
    fetchCategories()
  }, [fetchPhones, fetchCategories])

  const renderPhone = (phone, index) => {
    const shortDescription = `${R.take(60, phone.description)}...`

    return (
      <RenderPhoneWrapper key={index}>
        <Thumbnail>
          <Image src={phone.image} alt={phone.name} />
          <Caption>
            <H4Price>${phone.price}</H4Price>
            <H4>
              <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
            </H4>
            <p>{shortDescription}</p>
            <ItemButton>
              <ButtonBuyNow onClick={() => addPhoneToBasket(phone.id)}>
                Buy Now!
              </ButtonBuyNow>
              <LinkMoreInfo to={`/phones/${phone.id}`}>More info</LinkMoreInfo>
            </ItemButton>
          </Caption>
        </Thumbnail>
      </RenderPhoneWrapper>
    )
  }

  return (
    <Layout>
      <Row>{phones.map((phone, index) => renderPhone(phone, index))}</Row>
      <Row>
        <Column12>
          <ButtonLoadMore onClick={loadMorePhones}>Load More</ButtonLoadMore>
        </Column12>
      </Row>
    </Layout>
  )
}

const mapStateToProps = (state, ownProps) => ({
  phones: getPhones(state, ownProps),
})

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)

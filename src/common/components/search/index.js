import React, {useState} from 'react'
import {connect} from 'react-redux'

import {searchPhone} from 'actions'

import Wrapper from 'components/search/Wrapper'
import H3 from 'components/search/H3'
import InputGroup from 'components/search/InputGroup'
import Input from 'components/search/Input'
import SpanInputGroup from 'components/search/SpanInputGroup'
import Button from 'components/search/Button'

const Search = ({searchPhone}) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchPhone(value)
  }

  return (
    <Wrapper>
      <H3 className="lead">Quick shop</H3>
      <InputGroup>
        <form onSubmit={handleSubmit}>
          <Input onChange={handleChange} type="text" />
        </form>
        <SpanInputGroup>
          <Button>
            <span>
              <i className=" fas fa-search" />
            </span>
          </Button>
        </SpanInputGroup>
      </InputGroup>
    </Wrapper>
  )
}

const mapDispatchToPrors = {
  searchPhone,
}

export default connect(null, mapDispatchToPrors)(Search)

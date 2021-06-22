import React from 'react'

import Wrapper from 'containers/notFound/Wrapper'
import Title from 'containers/notFound/Title'
import P from 'containers/notFound/P'
import Link from 'containers/notFound/Link'

const NotFound = () => {
  return (
    <Wrapper>
      <Title>
        4
        <span role="img" arial-labe="Crying-Face">
          😢
        </span>
        4
      </Title>
      <P>Page not found.</P>
      <Link to="/">Return to Home Page</Link>
    </Wrapper>
  )
}

export default NotFound

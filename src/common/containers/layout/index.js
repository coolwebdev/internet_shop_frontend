import React from 'react'

import Sidebar from 'components/sidebar'

import Wrapper from 'containers/layout/Wrapper'
import Container from 'components/container'
import Row from 'components/row'
import Column3 from 'components/column3'
import Column9 from 'components/column9'

const Layout = ({children}) => (
  <Wrapper>
    <Container>
      <Row>
        <Column3>
          <Sidebar />
        </Column3>
        <Column9>{children}</Column9>
      </Row>
    </Container>
  </Wrapper>
)

export default Layout

import styled from 'styled-components'

const Column9 = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 75%;
  }
`

export default Column9

import styled from 'styled-components'

const ListGroup = styled.div`
  padding-left: 0;
  margin-bottom: 20px;

  a.active {
    z-index: 2;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
    text-decoration: none;
  }

  a:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  a:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`

export default ListGroup

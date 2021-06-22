import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const LinkAllCategories = styled(NavLink)`
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
  color: #555;

  &.active {
    outline: none;
    z-index: 2;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
    text-decoration: none;
  }

  :hover {
    outline: none;
    text-decoration: none;
    color: #555;
  }
`

export default LinkAllCategories

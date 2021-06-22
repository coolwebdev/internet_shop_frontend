import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

const Link = styled(RouterLink)`
  display: block;
  width: 100%;
  padding: 10px 16px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  line-height: 18px;
  border-radius: 0;
  text-shadow: 0 -1px 0 rgba(0 0 0 / 25%);
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #50a8e1;
  border: 1px solid #2d6898;

  :hover {
    background: rgba(80 168 225 / 90%);
    text-decoration: none;
    color: #fff;
  }

  :focus {
    text-decoration: none;
    color: #fff;
  }
`

export default Link

import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

const Link = styled(RouterLink)`
  display: block;
  width: 100%;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #5bc0de;
  border-radius: 4px;
  padding: 6px 11px;
  margin-bottom: 0;
  font-size: 14px;
  color: #fff;
  background-image: none;
  background-color: #5bc0de;

  :hover {
    text-decoration: none;
    color: #fff;
    background-color: #31b0d5;
    border-color: #2aabd2;
  }

  :focus {
    text-decoration: none;
    color: #fff;
  }

  :active {
    text-decoration: none;
    color: #fff;
    background-color: #269abc;
    border-color: #1f7e9a;
  }
`

export default Link

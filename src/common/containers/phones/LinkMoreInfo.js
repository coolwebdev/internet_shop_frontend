import styled from 'styled-components'
import {Link} from 'react-router-dom'

const LinkMoreInfo = styled(Link)`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
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
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  background-color: #fff;
  outline: none;

  :hover {
    text-decoration: none;
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }

  :active {
    text-decoration: none;
    color: #333;
    background-color: #ccc;
    border-color: #adadad;
  }

  :focus {
    text-decoration: none;
    color: #333;
    background-color: #ccc;
    border-color: #adadad;
  }
`

export default LinkMoreInfo

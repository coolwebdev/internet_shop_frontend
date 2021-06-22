import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  position: relative;
  z-index: 2;
  margin-left: -1px;
  margin-bottom: 0;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0;
  color: #333;
  background-color: #fff;
  cursor: default;

  :hover {
    text-decoration: none;
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }

  :focus {
    outline: none;
    text-decoration: none;
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }

  :active {
    outline: none;
    text-decoration: none;
    color: #333;
    background-color: #ccc;
    border-color: #adadad;
  }
`

export default Button

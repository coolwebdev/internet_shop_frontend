import styled from 'styled-components'

const ButtonCheckout = styled.button`
  display: block;
  width: 100%;
  color: #fff;
  background-color: #5cb85c;
  padding: 6px 12px;
  margin-bottom: 10px;
  font: inherit;
  font-size: 14px;
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
  background-image: none;
  border: 1px solid #5cb85c;
  border-radius: 4px;

  :hover {
    color: #fff;
    background-color: #449d44;
    border-color: #419641;
  }

  :focus {
    outline: none;
    color: #fff;
    background-color: #449d44;
    border-color: #419641;
  }

  :active {
    outline: none;
    color: #fff;
    background-color: #398439;
    border-color: #2d672d;
    background-image: none;
  }
`

export default ButtonCheckout

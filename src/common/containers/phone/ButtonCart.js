import styled from 'styled-components'

const ButtonCart = styled.button`
  margin-top: 5px;
  display: block;
  width: 100%;
  color: #fff;
  background-color: #5cb85c;
  padding: 6px 12px;
  margin-bottom: 0;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  -webkit-appearance: button;
  -moz-appearance: button;
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
    background-color: #449d44;
    border-color: #419641;
  }

  :focus {
    outline: none;
    background-color: #449d44;
    border-color: #419641;
  }

  :active {
    outline: none;
    background-color: #398439;
    border-color: #2d672d;
  }
`

export default ButtonCart

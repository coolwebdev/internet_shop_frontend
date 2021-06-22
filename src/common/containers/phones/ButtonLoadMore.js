import styled from 'styled-components'

const ButtonLoadMore = styled.button`
  float: right !important;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  overflow: visible;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  -webkit-appearance: button;
  -moz-appearance: button;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background-color: #337ab7;
  background-image: none;
  border: 1px solid #2e6da4;
  border-radius: 4px;
  outline: none;

  :hover {
    outline: none;
    background-color: #286090;
    border-color: #204d74;
  }

  :active {
    outline: none;
    background-color: #1c4569;
    border-color: #122d44;
  }
`

export default ButtonLoadMore

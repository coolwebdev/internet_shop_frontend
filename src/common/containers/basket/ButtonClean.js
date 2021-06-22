import styled from 'styled-components'

const ButtonClean = styled.button`
  display: block;
  width: 100%;
  color: #fff;
  background-color: #b85c5c;
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
  border: 1px solid #b85c5c;
  border-radius: 4px;

  :hover {
    color: #fff;
    background-color: #9d4444;
    border-color: #964141;
  }

  :focus {
    outline: none;
    color: #fff;
    background-color: #9d4444;
    border-color: #964141;
  }

  :active {
    outline: none;
    color: #fff;
    background-color: #843939;
    border-color: #672d2d;
    background-image: none;
  }
`

export default ButtonClean

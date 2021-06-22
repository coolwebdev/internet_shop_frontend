import styled from 'styled-components'

const Input = styled.input`
  display: table-cell;
  font: inherit;
  height: 34px;
  padding: 6px 12px;
  margin: 0;
  font-size: 14px;
  line-height: 1.43;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;

  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 7px rgba(13 110 253 / 35%);
  }
`

export default Input

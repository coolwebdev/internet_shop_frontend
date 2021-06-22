import styled from 'styled-components'

const RenderPhoneWrapper = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  display: inline-block;
  float: none;
  vertical-align: top;

  @media (min-width: 768px) {
    width: 33.33333%;
  }
`

export default RenderPhoneWrapper

import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

const Link = styled(RouterLink)`
  text-decoration: none;
  color: #d77158;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`

export default Link

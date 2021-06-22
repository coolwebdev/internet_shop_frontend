import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-right: -0.75rem;
  margin-left: -0.75rem;

  > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-top: 0;
  }
`

export default Row

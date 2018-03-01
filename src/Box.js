// Box is built using styled-components and styled-system.
// Box uses styled-system functions, each style function exposes its own set of
// props that style elements based on values defined in a .theme.js file.

// Examples:
//`<Box width={1/2} />`, `<Box fontSize={4} />`

import styled from 'styled-components'
import {
  space,
  width,
  maxWidth,
  flex,
  color
} from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${maxWidth}
  ${flex}
  ${color}
`

export default Box

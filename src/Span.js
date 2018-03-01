// Span is built using styled-components and styled-system.
// Span uses styled-system functions, each style function exposes its own set of
// props that style elements based on values defined in a .theme.js file.

// Example: `<Span color='black' mr={2} />`

import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
} from 'styled-system'

const Span = styled.span`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
`

export default Span

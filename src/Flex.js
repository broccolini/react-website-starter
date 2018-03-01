// This component extends the Box component, which is built using styled-components
// Flex uses styled-system functions, each style function exposes its own set of
// props that style elements based on values defined in a .theme.js file.

// Example: `<Flex wrap />`, `<Flex align='center'>`

import Box from './Box'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

const Flex = Box.extend`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`

export default Flex

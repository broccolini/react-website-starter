// Link is built using styled-components and styled-system.
// Link uses styled-system functions, each style function exposes its own set of
// props that style elements based on values defined in a .theme.js file.

// Example: `<Link p={[2,3]} color='gray.6' fontWeight='bold' />`

import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight
} from 'styled-system'

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  &:hover { text-decoration: underline; }
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
`

Link.defaultProps = {
  color: 'blue.5',
}

export default Link

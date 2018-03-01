// The Text component is built using styled-components and styled-system
// which lets us add styled-system functions to the component. Each style
// function exposes its own set of props that style elements based on
// values defined in a .theme.js file.
// Examples: `<Text color='red.5' />`, `<Text fontSize={4} />`

// The Text component uses the withComponent method to create a new styled-component
// with a different tag, but with all the same rules applied. This is so that you
// define whether the component is rendered with a `<div>` tag (default) or with
// a `<p>` tag.

// Example: `<Text.p />` will render as `<p>`

import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
} from 'styled-system'

const Text = styled.div`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
`

Text.p = Text.withComponent('p')

export default Text

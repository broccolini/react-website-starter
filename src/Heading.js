// The Heading component imports the Text component, which is built using
// styled-components and styled-system, this allows you to add styled-system
// functions to your component. Each style function exposes its own set of props
// that style elements based on values defined in a .theme.js file.
// Example: `<Heading fontsize={2}>`

// The heading component uses the withComponent method to create a new styled-component
// with a different tag, but with all the same rules applied. This is so that you
// define which heading tag the component is rendered with. This allows you to
// keep the markup semantic while visually styling the element how you like.
// Example: `<Heading.h3 />` will render as `<h3>`

import Text from './Text'

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 5,
  fontWeight: 600,
  lineHeight: 1.25,
  m: 0,
}

Heading.h1 = Heading.withComponent('h1')
Heading.h2 = Heading.withComponent('h2')
Heading.h3 = Heading.withComponent('h3')
Heading.h4 = Heading.withComponent('h4')
Heading.h5 = Heading.withComponent('h5')
Heading.h6 = Heading.withComponent('h6')

export default Heading

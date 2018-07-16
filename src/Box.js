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

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...flex.propTypes,
  ...color.propTypes
}

export default Box

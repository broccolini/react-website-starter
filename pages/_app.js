import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import CSS from '../src/CSS'
import Box from '../src/Box'

// Generic page wrapper component
const Page = props => (
  <React.Fragment>
    <CSS />
    <ThemeProvider theme={theme}>
      <Box color='bodytext'>
        {props.children}
      </Box>
    </ThemeProvider>
  </React.Fragment>
)

export default Page

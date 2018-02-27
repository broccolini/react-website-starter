import React from 'react'
import Page from './Page'
import theme from './theme'
import Heading from './Heading'
import Box from './Box'

const Index = props => (
  <Page>
    <Box p={3} mx='auto' width={2/3}>
      <Heading>
        Hello potato
      </Heading>
    </Box>
  </Page>
)

export default Index

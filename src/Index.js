import React from 'react'
import Page from './Page'
import theme from './theme'
import Heading from './Heading'
import Box from './Box'
import Octicon from "@github/octicons-react"
import Flex from './Flex'
import ButtonPrimary from './ButtonPrimary'

const Index = props => (
  <Page>
    <Box p={3} mx='auto' width={2/3}>
      <Flex align='center'>
        <Octicon name="heart" large middle/>
        <Heading ml={2}>
          Hello potato
        </Heading>
      </Flex>
      <ButtonPrimary>
        Give me potatoes
      </ButtonPrimary>
    </Box>
  </Page>
)

export default Index

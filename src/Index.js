import React from 'react'
import Page from './Page'
import theme from './theme'
import Heading from './Heading'
import Box from './Box'
import Octicon from "@github/octicons-react"
import Flex from './Flex'
import ButtonPrimary from './ButtonPrimary'
import UtilityBox from './UtilityBox'
import RepoItem from './RepoItem'
import BorderBox from './BorderBox'
import Link from './Link'
import Text from './Text'

const Index = props => (
  <Page>
    <Box p={3} mx='auto' width={[1, 1, 3/4, 1/2]}>
      <Heading mb={3}>
        Welcome to the Demo Page!
      </Heading>
        <Text fontSize={3} mb={2} fontWeight='bold'>🙋‍ Hi there,</Text>
        <Text mb={3}>
        This page is to demo components built in a few different ways, with <Link href='https://www.styled-components.com/docs'>Styled Components</Link> and <Link href='https://github.com/jxnblk/styled-system/'>Styled System</Link>, or with Primer CSS using <Link href='https://github.com/jxnblk/styled-system/tree/master/system-classnames'>System Classnames</Link>, and <Link href='https://github.com/JedWatson/classnames'>Classnames</Link>. Comments in within each component.js file explain what the component is built with. I recommend viewing the documentation for each of the packages for a better understanding of how each of them work.
        </Text>
        <Text mb={3}>
        As well as different libraries for applying styles, demos indclude extending a component and using the withComponent method from styled-components; using style functions to expose props defined in the theme.js file with styled-system; and using props to pass in data to a component. Have fun!
        </Text>

      <Flex align='center'>
        <Octicon name="heart" large middle/>
        <Heading fontSize={4} ml={2}>
          Octicons
        </Heading>
      </Flex>
      <ButtonPrimary>
        Primer CSS button
      </ButtonPrimary>
      <Link p={[2,3]} color='gray.7' fontWeight='bold' href='#'>
        A styled-component link
      </Link>
      <BorderBox mt={3} p={3}>
        BorderBox extends Box and adds a border to it!
      </BorderBox>
      <UtilityBox bg='green-light' my={4} p={4}>
        UtilityBox uses the classnames package and system-classnames to apply Primer utilities as props
      </UtilityBox>
      <Box py={2}>
        <RepoItem
          href='http://github.com'
          reponame='potato.js repo'
          description='Demo of a composit component, i.e. components within components!'
          stars='510'
        />
      </Box>
    </Box>
  </Page>
)

export default Index

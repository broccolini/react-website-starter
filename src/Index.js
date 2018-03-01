import React from 'react'
import Page from './Page'
import theme from './theme'
import Heading from './Heading'
import Box from './Box'
import Link from './Link'
import Text from './Text'
import Octicon from "@github/octicons-react"
import Flex from './Flex'
import Span from './Span'

const Index = props => (
  <Page>
  <Box bg='black' color='white' py={7} mb={5}>
    <Box p={3} mx='auto' width={[1, 1, 3/4, 1/2]} align='center'>
      <Heading.h1 fontSize={7} mb={3}>
        React Website Starter
      </Heading.h1>
      <Text fontSize={3} fontWeight={300}>Simple setup for websites built in React.js</Text>
    </Box>
  </Box>
    <Box p={3} mx='auto' width={[1, 1, 3/4, 1/2]} align='center'>
      <Text mb={5} fontSize={3}>
        The default setup on the master branch includes <Link href='https://www.styled-components.com/docs'>Styled Components</Link> 💅 and <Link href='https://github.com/jxnblk/styled-system/'>Styled System</Link> 💙 for styling  your components, and uses <Link href='https://github.com/c8r/x0'>x0 by Compositor</Link> to give you a zero-config React development environment and static site generator.
      </Text>
      <Text mb={5} fontSize={3}>
        👉 Switch to the <Link  fontWeight='bold' href='https://github.com/broccolini/react-website-starter/tree/demo'>demo branch</Link> to see example components with various different methods of applying styles. It’s probably more useful to view the code, but you can see what it looks like with this <Link href='http://broccolini-c302d53542.drafts.github.io/react-website-starter/'>Pages preview</Link>.

        The demo branch includes examples built with <Link href='https://primer.github.io/'>Primer</Link> CSS using <Link href='https://github.com/jxnblk/styled-system/tree/master/system-classnames'>System Classnames</Link>, and <Link href='https://github.com/JedWatson/classnames'>Classnames</Link>. Comments in within each component.js file explain what the component is built with. I recommend viewing the documentation for each of the packages for a better understanding of how each of them work.
        </Text>
        <Flex align='center'>
          <Link fontWeight='bold' href='https://github.com/broccolini/react-website-starter'>
            <Span mr={1}><Octicon name='mark-github' top /></Span>
            View on GitHub
          </Link>
        </Flex>
    </Box>

  </Page>
)

export default Index

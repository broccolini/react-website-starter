import React from 'react'
import Box from './Box'
import BoxList from './BoxList'
import Link from './Link'
import Text from './Text'
import Octicon from "@github/octicons-react"
import Flex from './Flex'

const RepoItem = props => (
  <BoxList>
    <Box p={3}>
      <Link fontWeight='bold' href={props.href}>
        {props.reponame}
      </Link>
      <Text my={2}>
        {props.description}
      </Text>
      <Flex align='center'>
        <Text mr={1} color='gray.5'>
          <Octicon name="star" small/>
        </Text>
        <Text fontSize={1} mr={2}>
          510
        </Text>
      </Flex>
    </Box>
  </BoxList>

)

export default RepoItem

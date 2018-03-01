// RepoItem is an example of a composit component showing examples where props
// can be used to pass data. Not necessarily what you might want to do in a
// large-scale application, just a demo of what you can do.

import React from 'react'
import BorderBox from './BorderBox'
import Link from './Link'
import Text from './Text'
import Octicon from "@github/octicons-react"
import Flex from './Flex'

const RepoItem = props => (

  <BorderBox p={3}>
    <Link fontWeight='bold' fontSize={3} href={props.href}>
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
        {props.stars}
      </Text>
    </Flex>
  </BorderBox>


)

export default RepoItem

import React from 'react'
import classnames from 'classnames'

const BoxList = props => (
    <div
      {...props}
      className={classnames(
        props.className,
        'Box'
      )}
    />
)

export default BoxList

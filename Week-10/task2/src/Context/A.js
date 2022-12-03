import React from 'react'
import B from './B'

export default function A({user}) {
  return (
    <div>
      Inside A user={user}
      <B user={user}></B>
    </div>
  )
}

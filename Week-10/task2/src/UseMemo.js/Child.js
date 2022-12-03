import React, { useCallback } from 'react'

function Child() {
    let data='inside child'
  return (
    <div>
      Indsie children
      {
    
        console.log('Insise Child')
      }
    </div>
  )
}
export default  React.memo(Child)
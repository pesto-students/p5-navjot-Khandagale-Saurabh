import React from 'react'
import Child from './Child'

 function Parent() {
  return (
    
    <div>

    { console.log(' Inside Parent')}
    <Child></Child>
    </div>
  )
}

export default React.memo(Parent)
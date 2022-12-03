import React from 'react'
import { ReactDOM } from 'react'
class Mounting1 extends React.Component{
    constructor(props)
    {
        super(props);
       console.log('Inside Constructor',props.city);
    }
    componentDidMount()
    {
        console.log('I am running after mounting & constructor');
    }
    render()
    {
        console.log('Inside Render')
        return <>
        
          <h1>Hello I am Mounting1 inside </h1>
          {console.log('leaving')}
        </>   
    }
}
export default Mounting1 
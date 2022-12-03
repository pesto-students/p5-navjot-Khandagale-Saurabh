import React, { Component } from 'react'
import menu from './Menu'
import Rest from './Rest'
export default class MenuShow extends Component {
constructor(props)
{
    super(props)
  this.state={
    name:'Saurabh'
  }
}
  render() {

    return (
      <div>
        {/* {console.log(menu)} */}
        <Rest item={menu[0].categorys}></Rest>
      </div>
    )
  }
}

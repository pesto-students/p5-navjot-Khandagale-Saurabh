import axios from 'axios'
import React, { Component } from 'react'

export default class Tabs1 extends Component {
 constructor(props)
 {
    super(props)
    this.state={
    jobs:[]  
    }
 }
 componentDidMount()
 {

    fetch('https://course-api.com/react-tabs-project')
    .then((res)=> res.json())
    .then(jb=>{
        this.setState({jobs:jb}) 
    })
 
 }
    render() {
    return (
      <div>
        {
           
        }
        ss
       {
        console.log(this.state.jobs,'dd')
       } 
      </div>
    )
  }
}

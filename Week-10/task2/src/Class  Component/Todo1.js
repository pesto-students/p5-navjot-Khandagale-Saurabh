import React, { Component } from 'react'
import './Style.css'
 class Todo1 extends Component {
    constructor()
    {
        super();
        this.state={
            tasks:['Saurabh'],
            cTask:''
        }
    }


    
    handleChange(e){
         console.log(e.target.value)
        this.setState({
            cTask:e.target.value
        })
    }
    handleClick(){
      this.setState({
         tasks:[...this.state.tasks,this.state.cTask],
        cTask:''
      })
    }

  render() 
  {
    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)}  value={this.state.cTask}></input>
        <button onClick={this.handleClick.bind(this)} >Click</button>
          <p>
              {
                this.state.tasks.map((e,idx)=>(
                    <div className='designTodo'  id={idx}>{e}</div>
                ))
              }
          </p>
      </div>
    )
  }
}

export default  Todo1;
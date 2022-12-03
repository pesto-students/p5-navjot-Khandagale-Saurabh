import axios from "axios";
import React, { Component } from "react";
import { memo } from "react";
import "./Style.css";

import { MdToggleOn,MdToggleOff } from "react-icons/md";
import { FaBeer } from "react-icons/fa";
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      status:true
    };
  }
  async componentDidMount() {
    let y = await axios.get(" https://the-trivia-api.com/api/questions");
    let res = y.data;
    console.log(res[0].category);
    this.setState({
      question: [...res],
    });
  }
  render() {
    console.log(this.state.question);
    return (
      <>
        <div className="desgin">
          <div>
            {this.state.question.map(({ id, question, incorrectAnswers }) => (
              <p>
                {id}
                {question}
            
            {
                // this.state.status===true?<button onClick={()=> this.setState({status:!this.state.status}) } >  <MdToggleOn /> </button>: <MdToggleOff />
                
            }
            <button onClick={()=>this.setState({status:!this.state.status})} >{this.state.status?<MdToggleOn />:<MdToggleOff />}</button>
             
              </p>
            ))}
          </div>
        </div>
        here
      </>
    );
  }
}

export default memo(Question);

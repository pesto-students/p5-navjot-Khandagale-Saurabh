import axios from "axios";
import React, { useState } from "react";
function Task() {
  let [loader, setLoader] = useState("false");
  let [input, setInput] = useState("");
  let [result, setResult] = useState("");
  let fetchDat = async () => {
    try {
      setLoader("true");
    //   let res=await axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
    setLoader('false')
    // setResult(res.data.result.full_short_link)
    } catch (error) {
        alert(error)
    }
  };
  let handleClick=()=>{
    fetchDat()
    setInput('')
  }

  return(<>
  <div>

    <h1>Url Shorten</h1>
    <input type='text' placeholder="Ennter your Link Hear" value={input} onChange={(e)=>setInput(e.target.value)}></input>
  <button onClick={handleClick}>Submit</button>
  {loader==='true'?<p>Loadding...</p>:{result}}
  </div>
  
  </>)
}

export default Task;
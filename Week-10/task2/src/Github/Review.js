import { forEach } from "lodash";
import React, { useState } from "react";
import users from "./GetAllUser";
import Git from "./Git.css";
export default function Review() {
  let [idx, setInd] = useState(0);
  let { login, id, node_id, avatar_url, url, received_events_url } =  users[idx];
  let left = () => {
    setInd((ix) => {
      console.log("Left" , ix, login);
      let neIdx = ix + 1;
      return neIdx;
    });
  };
  let Right = () => {
    setInd((ix) => {
      console.log("Right", ix, login);
      let neIdx = ix - 1;
      return neIdx;
    });
  };
  return (
    <>
    {
        console.log('ddd',users[0])
    }
      <div className="outter">
        <div className="review">
          <div className="container">
            <div>
            <img src={avatar_url}></img>
            <br></br>
              ===?{login}== 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              illum fuga accusamus ipsum officia voluptate aliquid doloribus
              nemo doloremque sed numquam tempore itaque ipsam blanditiis
              aliquam hic voluptatum, vel atque! Et, labore? Ad adipisci
              laudantium culpa dicta numquam quaerat, aperiam error odit
            </div>
          </div>
          <button  onClick={left}>Left</button>
          <button style={{float:'right'}} onClick={Right}>Right</button>
        </div>
        <div className="abc">
         
        </div>
      </div>
    </>
  );
}

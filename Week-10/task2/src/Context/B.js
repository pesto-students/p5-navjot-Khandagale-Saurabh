import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
 function Fetch() {
  let [input, setInput] = useState("");

  let url = `https://api.shrtco.de/v2/shorten?url=${input}`;
  let [dat, setDat] = useState("");
  let refElement = useRef();
  let refElement1 = useRef();
  let handleChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };

  useEffect(() => {

    fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((data) => data.json())
      .then((val) => {
        console.log(val)
        setDat(val.result.full_short_link);
      }).catch(e=>{console.log(e)});
  },[input]);
  let getUrl = () => {
    console.log("click data", refElement);
    refElement.current.hidden = false;
    refElement1.current.hidden = false;
  };

  return (
    <div key="r">
      Ji
      <div>
        <label>Type Url</label>
        <input onChange={handleChange}></input>
        {/* <button onClick={getUrl}>Get Url</button> */}
        <p ref={refElement} hidden={true}>
          {dat}
        </p>
        <CopyToClipboard text={dat}>
          <button onClick={getUrl} >Copy to clipboard</button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
export default  React.memo(Fetch);

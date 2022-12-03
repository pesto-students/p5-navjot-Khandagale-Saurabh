import React, { useState } from "react";
let Form1 = () => {
  let [name, setName] = useState('');
  let [arr,setArr]=useState(['Saurabh','Chetan'])
  function changeName(e) {
    setName(e.target.value);
    console.log(e.target.value);

    console.log(arr);
  }
  function addArr() {
    let temp=arr;
    temp.push(name);
    setArr([...temp]);
    console.log("Chnage Add", arr);
  }

  return (
    <>
      HII
      <div id="parent">
        <form>
          <input value={name} onChange={changeName}></input>
        </form>

        <div>
          <button onClick={addArr}>Add</button>
        </div>

        <div>
          {arr.map((e,idx) => (
            <p key={idx}>{e}</p>
          ))}
        </div>
      </div>
    </>
  );
};
export default Form1;

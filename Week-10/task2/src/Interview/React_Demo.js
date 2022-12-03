
import React, { useState, useEffect } from "react";

export default function React_Demo() {
  let User = [{ name: "Saurabh" }, { name: "Rahul" }, { name: "Arpit" }];
  let [name, setName] = useState("");
  let [name1, setName1] = useState("");
  let [found, setFound] = useState(User);
  let[api,setApi]=useState('');
  let [found1, setFound1] = useState(api);
  useEffect(()=>{
  

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp=>resp.json())
    .then(val=>{
      let y=val;
      let ans=  y
      setName1(ans)
      console.log(ans)
      setApi(ans)
      setFound1(ans)
    })
  },[])

 

  let serchEle1 = (e) => {

    
    let keyword = e.target.value;

    if (keyword !== "") {
      let result = api.filter((ele) => {
        return ele.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFound1(result);
    } else {
      
      setFound1(api);
    }
     console.log(name1)
    setName1(keyword);
  };
  return (
    <div>
   

      <div>

      <input onChange={serchEle1} placeholder="Type to Search"></input>
      <div>
      <button onClick={()=>{
        console.log(name1)
                        setApi(name1)
        }}>Click</button>
        {found1 && found1.length > 0 ? (
          found1.map((ele) => <p>{ele.title}</p>)
        ) : (
          <p>No find</p>
        )}

      </div>
      </div>
    </div>
  );
}

import React,{useState} from "react";

let obj={
    name:'Saurabh',
    young:true,
    age:21,
    sirName:'Khandgale',
    arr:[10,20,30,40,50]
};


let UseState_object=()=>{
let [person,setPerson]=useState(obj);


let getData=(e)=>{
    console.log(e.target.value,person.name.length);
    if(person.name.trim()==="")
    {
        setPerson(previousState=>{
       
            return({
                ...previousState,
                name:'Saurabh',
                
            })
           
        })
    }else{
    setPerson(previousState=>{
       
        return({
            ...previousState,
            name:e.target.value,
            
        })
     
    })
    }
    
    }
let ChangeArr=()=>{
   
    setPerson(prev=>{
       return({
        ...prev,
        arr:[1,2,3,4,5]
       })
    }) 
   
}
return(<>
<div>
    <p>{person.name}</p>
    <p>{person.young.toString()}</p>
    <p>{person.age}</p>
    <p>{person.sirName}</p>
    <p>
        <ul>
        {person.arr.map((e,i)=><li key={i}>{e}</li>)}
        </ul>
   </p>
</div>

<div>
    <input onChange={getData}></input>
    <button onClick={ChangeArr}>Click</button>
</div>
</>)
}
export default UseState_object;
import React,{useState,useEffect} from 'react'
function Task2()
{
    let [data1,setData]=useState();
    let [link1,setLink]=useState('')
   

        let fetchValue=async()=>{
           try {
         let res=   await fetch(`https://api.shrtco.de/v2/shorten?url=${link1}`)
            console.log(res.data,'++')
           } catch (error) {
            
           }
        }
       
        
  
    function handleChnage(e)
    {
      console.log(e.target.value)
      setLink(e.target.value)
    }
    function Save()
    {fetchValue();
        let ans=data1+link1
        console.log(ans,'Answer')
    }
    return(<>
    
    <input type='text' onChange={handleChnage} value={link1} ></input>

<button onClick={Save}>Click</button>
    </>)
}
export default Task2;
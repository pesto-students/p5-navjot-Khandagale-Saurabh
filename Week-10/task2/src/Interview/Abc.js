import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Abc() {
    let [found,setFound]=useState()
    let [api,setApi]=useState()
    useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/todos')
 .then((data)=>data.json)
 .then(val=>setApi(val))
    },[])

    let SerchElement=(e)=>{
       let keyword=e.target.value;
        if(keyword!=='')
        {
            let res=api.filter((e)=>{
                return e.title
            })
        }
        else
        {

        }
    }
  return (
    <div>
      <input onChange={SerchElement}></input>
      <div>
        {
            found &&found.length===0?(

            ):()
        }
      </div>
    </div>
  )
}

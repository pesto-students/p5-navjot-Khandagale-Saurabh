import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Fetch() 
{
    let url=`https://jsonplaceholder.typicode.com/todos/`;
    let [dat,setDat]=useState('')
    useEffect(()=>
    {   
        fetch(url)
        .then(data=>data.json())
        .then((val)=>{
            
            let y=val
          let dd=  y.map((ele,i)=>{
                return <p id={i}>{ele.title}</p>
              
            })
            setDat(dd)
        })
        })

  return (
    <div key='r'>
        {
    dat
}
Ji
    </div>
  )
}

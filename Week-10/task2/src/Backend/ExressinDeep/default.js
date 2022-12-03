const express= require('express')
let {people} =require('./Product')
const http=require('http')
let app=express();
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.post('/login/user',(req,res)=>{
     let {name}=req.body
     console.log(req.body)
    res.send(`<h1>Data on login  </h1>`)
})
 
app.put('/putdata/:id',(req,res)=>{
    let y=req.body;
    let {id}=req.params
    let person=people.find((pp)=> pp.id===Number(id))
    console.log(people,person)
    if(!person)
    {
       res.status(404).json('Person Not exist')
    
    }
    
      let ii=  people.map((ps)=>{ 
              if(ps.id==id){ps.name=y
              }
              return ps
            })
    
    console.log(y,req.params,req.body)
    res.status(200).json({data:ii})
    // res.send('<h1>Send Data</h1>')
})
app.post('/login/username', (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
  })
let server =http.createServer(app)
server.listen(3040);
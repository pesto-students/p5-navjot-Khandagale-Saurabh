const express= require('express');
const http=require('http')
const { dirname } = require('path');
let path=require('path')
let router=express();

router.get('/addP',(req,res,next)=>{
    //  res.send('<h1>Inised R1 of Route Bob the builder</h1>') 
   res.sendFile(path.join(__dirname,'../../','view','addProduct.html')) 
  
  console.log('Inside Product')
})
let server=http.createServer(router)
server.listen(3000)
// module.exports=router; 

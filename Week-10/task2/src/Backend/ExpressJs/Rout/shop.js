const http=require('http')
const path=require('path')
const express=require('express')
let app=express()


app.get('/default',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../../','view','default.html'))
    // res.sendFile(path.join(__dirname,'../../','view','addProduct.html')) 
  
    console.log('INdie Default')
    // res.write('<h1>aaa</h1>')
    // res.end()
})+
app.get('/addproduct',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../','view','addproduct.html'))
})

app.use((req,res)=>{
    
    console.log('clcik')
    res.status(404).send('<h1>Page Not Found</h1>')
})


let server=http.createServer(app)
server.listen(4000)
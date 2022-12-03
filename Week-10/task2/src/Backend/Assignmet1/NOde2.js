const http=require('http')
const url=require('url')
let server=http.createServer((req,res)=>{

let method=req.method;
let obj=url.parse(req.url,true).query
let uname=obj.uname;
let upwd=obj.upwd
 if(uname==='Saurabh' )
 {
  res.write('<h1> Login Sucessful</h1>')
 }
 else
 {
    res.write('<h1>  Wrong User </h1>')
    
 }
})
server.listen(4030)
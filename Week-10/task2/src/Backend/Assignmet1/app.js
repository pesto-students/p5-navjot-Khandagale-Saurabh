const fs=require('fs')
const http=require('http')
let server=http.createServer((req,res)=>{
let url=req.url
let method=req.method;
if(url==='/')
{
    res.write(`<html>
      <body>
      <form action='/create-User' method='POST'>
         <input type='text' name='messss'>
         <button type='submit'>Send</button>
         </input>
         </form>
      </body>
      </html>
      `);
      return res.end()
}
if(url==='/users')
{
let body=['Saurabh','chetan'];
// res.on('data',(chunk)=>{
//     body.push(chunk)
// })
// let bodyParse=Buffer.concat(body).toString()
console.log(body)
res.write(`<html>
      <body>
         <ul>
           
        
      `);
for(let i=0;i<body.length;i++)
{
res.write(`<li>${body[i]}</li>`)
}
      res.write('</ul></body></html>')
}


if(url==='/create-User')
{
 req.on('data',(ch)=>{
    console.log(ch)
 })
 console.log('Cretae User')
}
res.end()
})
server.listen(5000)
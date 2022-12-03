let http=require('http')
let server=http.createServer((req,res)=>{
   
res.write('<html>');

res.write('<body>');
if(req.url==='/message')
{
    res.write('I inside message url ')
}
else{
    res.write('<form  action="/new">  method="Post" ')
    
    res.write("  <input type='text'></input>")
    res.write("  <input type='submit'></input>")
    
    res.write('</form>')
}

if(req.url==='new?')
{
res.write('Inside New')
}
res.write('Hello I am saurabh');
res.write('</body>');
res.write('</html>');
console.log(req.url)
res.write('Here '+req.url)
res.end();
})
server.listen(2000)

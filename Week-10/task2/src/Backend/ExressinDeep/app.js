let  {people,products} =require('./Product')
let express=require('express')
let http=require('http')
let app=express();
app.get('/pp',(req,res)=>{
    let {people}=require('./Product')
    res.json(people)
})
app.use('/people',(req,res)=>{
    let y=new Date();
    console.log(y)
})
app.get('/',(req,res)=>{
    res.json({name:'Saurabh',age:22})
    
})
app.get('/people/t',(req,res)=>{
    console.log(people)
    res.json(people)
    return
})
app.get('/order/:oid',(req,res)=>{
    let {oid}=req.params;
    console.log('ddddd')
    let data =products.find((ofi)=> ofi.id=== Number(oid))
    if(!data)
    {
     return res.status(404).send('Not Exist')   
    }
    console.log('Here=>',data)
    return res.json(data);
})

app.get('/prd/:pid',(req,res)=>{
    let {pid} =req.params;
    let ans=products.find(i=>i.id===Number(pid))
    // console.log(ans);
    console.log(req.query)
    return res.json(ans);

})
app.get('/serch',(req,res)=>{
console.log(req.query)
return res.json(req.query)
})

app.all('*',(req,res)=>{
    res.send('<p>Snd Data</p>')
})
console.log('server...')
let server=http.createServer(app)
server.listen(2500)
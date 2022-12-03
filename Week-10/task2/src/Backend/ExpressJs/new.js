let express=require('express');
let app=express();
app.listen(4000)
let users={name:'Saurabh',
name1:'Ram'}

app.get('/get',(req,res)=>{
    console.log('Hrllo i am getting data')
    res.send('<h1>Get Data </h1>')
})

app.post('/post',(req,res)=>{
    console.log(users)
    res.send(users)
    // res.send('<h1>Post Data </h1>')
})
app.use((req,res)=>{
    res.sendStatus(404)
})
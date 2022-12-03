let data=10;
let Prm =new Promise((res,rej)=>{
data==10?res(()=>{
  data=33
}):rej([11,22,33,44,55])

})
Prm.then((e)=>{console.log(e ,'Then  ',`${data}`);}).catch((r)=>{console.log(r,'Catch');})
console.log();
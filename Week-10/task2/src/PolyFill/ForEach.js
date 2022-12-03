Array.prototype.MyForEach=function(callBack)
{
  for(var i=0;i<this.length;i++)
  {
   callBack(this[i],i,this)
  }
}

let arry=[10,20,3,40,50,60]
// arry.MyForEach(e=>console.log(e))

Array.prototype.Mymap=function(callBack){
    var arr=[]
    for(var i=0;i<this.length;i++)
    {
        if(callBack(this[i],i,this))
        arr.push(this[i])
    }
    return arr;
}
let yy=arry.Mymap(e=> {
return e==10
})
 console.log(yy)
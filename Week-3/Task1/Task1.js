const RunFast=(fn)=>{
    const cache={}; 
    return function(...args)
    {
        if(cache[args])
        {
            console.log('Argument Already Prest ');
            // for(let i in cache){
            //     console.log(i);
            // }
            
            return cache[args]
        }
        const result=fn(...args)
        {
            cache[args]=result;
            console.log('Argument added '+cache);
            for(let i in cache){
                console.log(i);
            }
            console.log('}}}}}}}}{{{{{{{{{')
            console.log(cache)
            return result;
        }
       
    }
}

function sum1(...args)
{
    let ans=0;
   for(let i in args)
   {
       ans+=args[i]
   }
   return ans;
}
function time(fn)
{
   console.time();
   console.log(fn());
   console.log()
   console.timeEnd();
}
const check=RunFast(sum1)
time(()=>check(2,3,6.111,23,434,43,54,22))

time(()=>check(2,3,6.111,23,434,43,54,22))
time(()=>check(2,3,6.111,23,434,43,54,22))
time(()=>check(2,3,6.111,23,434,43,54,22))
console.log('$$$$$$$$$$$$$$');
time(()=>check(111,23,434,43,54,22,444,55,6))
time(()=>check(111,23,434,43,54,22,444,55,6))

console.log('=================================');
time(()=>check(99,88,5,6,5,3,34,34,43,34,43,34,45113))
time(()=>check(99,88,5,6,5,3,34,34,43,34,43,34,45113))


console.log('######################')


// console.time();
// sum1((2,3,6.111,23,434,43,54,22))
//    console.timeEnd();
//    console.time();
// sum1((2,3,6.111,23,434,43,54,22))
//    console.timeEnd();
//    console.time();
// sum1((2,3,6.111,23,434,43,54,22))
//    console.timeEnd();
//    console.time();
// sum1((2,3,6.111,23,434,43,54,22))
//    console.timeEnd();
//    console.time();
// sum1((2,3,6.111,23,434,43,54,22))
//    console.timeEnd();



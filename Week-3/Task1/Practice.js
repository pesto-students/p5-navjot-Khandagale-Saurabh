let mem=require('lodash.memoize')
function fib(n)
{
 if(n<2)
 {return n;
 }

 return fib(n-1)+fib(n-2);
}


function time(fnn)
{
   console.time();
   fnn();
   console.timeEnd();
}


time(()=>fib(35))
time(()=>fib(35))
time(()=>fib(35))
time(()=>fib(39))
time(()=>fib(39))


console.log('============')

const Fm=mem(fib)
time(()=>Fm(35))
time(()=>Fm(35))
time(()=>Fm(35))
time(()=>Fm(39))
time(()=>Fm(39))

const createFast=(fn)=>{
    const cache={};
    return function(...args){
         if(cache[args])
         {
            console.log('Argument Already Prest ');
            for(let i in cache){
                console.log(i);
            }
            return cache[args]
         }
         const result =fn(...args)
         {
            cache[args]=result;
            
            console.log('Argument added '+cache);
            for(let i in cache){
                console.log(i);
            }
            return result;
         }
    }
}
const check=createFast(fib)
console.log('#################');

time(()=>check(35))
time(()=>check(35))
time(()=>check(35))
time(()=>check(39))
time(()=>check(39))




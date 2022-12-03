// let obj={
//     fName:'Saurabh',
//     lName:'Khandagale',
//     data:[1,2,3,4]
// }

// let [one,two,,e,rr=11]=obj.data
// // console.log(one+ ''+e+'rr'+rr);

// let ans=[-11,22,33,...obj.data]
// // console.log(ans);
// obj={ans,...obj}
// console.log(obj);

// let oo={
//     firstName:'Saurabh',
//     callMe:()=>
//    {
//     //   console.log(firstName);
      
//       console.log(this);
//     }
// }
// oo.callMe()


let AirIndia={
    AirLineId: 'AI201',
    luggage:[],
    Passender:200,
    Pilot(Pname,Passender)
    {
       console.log(`Pilot ${Pname} is driving ${this.AirLineId} with ${Passender} `);
      this.luggage.push('car')
    }
}
AirIndia.Pilot('Saurabh',300,'Dj')// for Air India

// Now this function is not part of AirIndia if we want to link assignValueFunction ,so that it will pass data and Link data we wil use Bind
let assignValueOfFunction=AirIndia.Pilot
assignValueOfFunction.call(AirIndia,'Ram',155)//problem
//Pilot Ram is driving [undefined] with 300=> becaus Line 39 is not art of AirLine so this become global;



let assignLug=AirIndia.luggage
assignValueOfFunction.call(AirIndia,'Rahul',500)


let Indigo={
    AirLineId: 'IG201',
    Passender:400,
    luggage:[]
}


assignValueOfFunction.call(Indigo,'Arpit',500)// We have make call 
// console.log(Indigo);
// console.log(AirIndia);

let data1=Object.keys(Indigo);
let val=Object.values(Indigo);
let pair=Object.entries(Indigo)
console.log(data1);
console.log(val);
console.log(pair);


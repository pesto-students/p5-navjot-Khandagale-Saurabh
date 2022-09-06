/*
In this case We try to create function in one object and try to add values in both array of objecs 
as this is possible because we have glovbal this

*/
let AirIndia={
    AirLineId: 'AI201',
    luggage:[],
    Passender:200,
    Pilot(Pname,Passender,...data)
    {
       console.log(`Pilot ${Pname} is driving ${this.AirLineId} with ${Passender} `);
      
       this.luggage.push(...data)
    }
}


let Indigo={
    AirLineId: 'IG201',
    luggage:[],
    Passender:200,
    //no need to create seprate function to initialize luggage array because we have gobal this
    
}
// AirIndia.Pilot('Saurabh',120)

let Experimrnt=AirIndia.Pilot
// At this point this is  gobal with help of apply we specy who to call
let y=['Dhanush',130,['Yamaha','Diskkk']]
Experimrnt.apply(AirIndia,y)   //taking arrray as input
 Experimrnt.call(Indigo,'Sachin',130,'Ktm','Honda') 
// console.log(Indigo.luggage);
console.log(AirIndia);   //uncomment for apply 
 console.log(Indigo);   //uncomment for call

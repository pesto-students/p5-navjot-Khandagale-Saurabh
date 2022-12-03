
let one=document.getElementById('one').innerText;
console.log(one);
let cook=document.getElementsByName('cook');
function changeThem(e){
console.log('click',e)
e='Save is updated to Change'
console.log('click',e);
cook.forEach((e)=>{
    // console.log(e);  
       console.log( e.innerText);
       one=e.innerText;
    })
    console.log(one,'==ONe');
}





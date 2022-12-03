// 
const t = [1, 2, 3, 4]; //

const t1 = t.map((ele) => ele);

let obj = [
  {
    name: "test",
    value: "123"
  },
  {
    name: "test1",
    value: "45656"
  }
];
let ans = obj.reduce((acc, ele) => {
  // console.log(ele.value);
  acc[ele.name]=ele.value
  acc['ele.name11']=ele.value
 //static vs dynamic key in object
 //retu => map ,filter, re
  console.log(acc);
  console.log(ele);
  return acc
}, {});
console.log(ans);

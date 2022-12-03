var data = 10;
let prm = new Promise((res, rej) => {
  if (data === 10) {
    res("Data Found");
  } else {
    rej(["Data not found"]);
  }
});

prm
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

let y=arr.filter(ele=> ele%35 )
console.log(y,'===');


let ans = arr.reduce((acc, crr, i, arr1) => {
  // console.log(`${i} is index`,arr1);
  return acc + crr;
});
//   console.log(ans);

// test("Test Data", () => {
//   expect(2 + 2).toBe(3);
// });

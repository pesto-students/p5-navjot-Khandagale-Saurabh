var data=10
function* Generator()
{
    console.log('First Value',data);
    // let ptr=yield ;
    console.log(yield);
    yield 320;
    console.log('Second Value',data+100);
}
let iter=Generator();
iter.next(222);// yaha start kiya generator

iter.next(222);// ab yaha se value pass hogi to line number 4



let nums=[2,0,2,1,1,0]
let start = 0, mid = 0 ,end = nums.length-1;
let pivot = 1;
while (mid <= end)
{
    if (nums[mid] < pivot)		 // current element is 0
    {
        swap(nums, start, mid);
        ++start, ++mid;
    }
    else if (nums[mid] > pivot)	// current element is 2
    {
        swap(nums, mid, end);
        --end;
    }
    else						 // current element is 1
    {
        ++mid;
    }
}

function swap(nums,  i,  j) {
let temp = nums[i];
nums[i] = nums[j];
nums[j] = temp;
}

console.log(nums)
























// var sort012 = function(nums) {
//     let low = 0, high= nums.length - 1, mid= 0;
    
//     while(mid <= high) {
//         if(nums[mid] === 0) {
//             // swap mid and low pointers values
//             [nums[low], nums[mid]] = [nums[mid], nums[low]];
//             low++;
//             mid++;
//         } else if(nums[mid] === 2) {
//             // swap mid and high pointers values
//             [nums[high], nums[mid]] = [nums[mid], nums[high]];
//             high--;
//         } else {
//             mid++
//         }
//     }
// };
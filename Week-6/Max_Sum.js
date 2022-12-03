var maxSubArray = function(nums) {

    let maxSoFar = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + nums[i-1], nums[i]);
        maxSoFar = Math.max(nums[i], maxSoFar);
    }
    
    return maxSoFar;
};
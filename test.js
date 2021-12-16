/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

//After sorting, it becomes [0,1,9,16,100].
nums1 = [-4,-1,0,3,10]
nums2 = [-7,-3,2,3,11]

var sortedSquares = function(nums) {
    // Simplest way to do this
    // first muplied them by the power of 2
    for(var i = 0; i < nums.length; i++) {
        nums[i] = nums[i] ** 2;
    }

    // then use the sort function included in javascript
    nums = nums.sort((a, b) => {
       return a - b
    })
    return nums;
};


console.log(`output: ${sortedSquares(nums1)}`)
console.log(`output: ${sortedSquares(nums2)}`)


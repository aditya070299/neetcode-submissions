class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        if(nums.length === 0) return false 
        let map = new Map();

        for(const num of nums){
            if(map.has(num)){
                return true
            }
            map.set(num, (map.get(num) || 0) + 1)
        }
    return false
    }
}

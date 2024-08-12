// CONSTANT

// const return5 = () => {
//   const name = 'Billy';
//   const age = 65;
//   const favToy = 'Tire Swing';

//   return 5;
// }

// console.log(return5());



// LINEAR

// const logLoop = (arr) => {
//   for(let i = 0; i < arr.length; i++) { // O(n)
//     console.log(arr[i]);
//   }
// }

// // O(n) x O(n) = O(n^2)

// logLoop(['Billy', 'Sarah', 'Lucy']);



// LOGARITHMIC

// const findNum = (nums, target) => {
//   for(let i = Math.floor(nums.length / 2); nums.length > 0; i =  Math.floor(nums.length / 2)) {
//     if(nums[i] === target) { 
//       return 'Found target';
//     }

//     nums = nums.slice(i + 1, nums.length);
//     console.log(nums);
//   }
// }

// console.log(findNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15));



// QUADRATIC

// const nestedLogLoop = (arr) => {
//   for(let i = 0; i < arr.length; i++) { // O(n)
//     for(let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i]); // O(1)
//     }
    
//   }
// }

// // O(n) x O(n) = O(n^2)

// nestedLogLoop(['Billy', 'Sarah', 'Lucy']);

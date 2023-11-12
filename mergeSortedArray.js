let merge = (nums1, m, nums2, n) => {
  nums1.splice(nums1.length - m, nums1.length - m);
  nums1.splice(m, 0, ...nums2);
  let num1 = Array.from(new Set(nums1.sort((a, b) => a - b)));
  console.log("nums1 :>> ", num1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// var merge = function (nums1, m, nums2, n) {
//   for (let i = m, j = 0; j < n; i++, j++) {
//     nums1[i] = nums2[j];
//   }
//   nums1.sort((a, b) => a - b);
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

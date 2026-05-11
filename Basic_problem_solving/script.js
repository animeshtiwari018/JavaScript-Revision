// ****Reverse a array (In Place)

//   class Solution {
//     // Function to reverse the array in place
//     reverse(arr) {
//       let start = 0;
//       let end = arr.length - 1;

//       while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;

//         start++;
//         end--;
//       }
//     }
//   }

//   let sol = new Solution();

//   let arr = [1, 2, 3, 4, 5];

//   sol.reverse(arr);

//   console.log(arr);

// **** For loop working****

class Solution {
  studentGrade(marks) {
    if (marks >= 90) {
      console.log("Grade A");
    } else if (marks >= 70) {
      console.log("Grade B");
    } else if (marks >= 50) {
      console.log("Grade C");
    } else if (marks >= 35) {
      console.log("Grade D");
    } else {
      console.log("Fail");
    }
  }
}

let sol = new Solution();
sol.studentGrade(95);


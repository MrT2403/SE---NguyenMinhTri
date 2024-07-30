// Question 1
// for (let i = 1; i <= 10; i++) {
//   console.log(i + "\n");
// }

// Question 2
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log("a" + "\n");
//   } else {
//     console.log(i + "\n");
//   }
// }

// Question 3
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log("a" + "\n");
//   } else if (i % 3 == 0) {
//     console.log("b" + "\n");
//   } else {
//     console.log(i + "\n");
//   }
// }

// Question 4
// for (let i = 1; i <= 10; i++) {
//   if (i % 3 == 0 && i % 2 == 0) {
//     console.log("ab" + "\n");
//   } else if (i % 2 == 0) {
//     console.log("a" + "\n");
//   } else if (i % 3 == 0) {
//     console.log("b" + "\n");
//   } else {
//     console.log(i + "\n");
//   }
// }

// Question 5
// function convertHour(time) {
//   let [hours, minutes] = time.split(":");
//   hours = parseInt(hours);
//   let period = hours >= 12 ? "PM" : "AM";

//   if (hours === 0) {
//     hours = 12;
//   } else if (hours > 12) {
//     hours = hours - 12;
//   }

//   return `${hours}:${minutes}${period}`;
// }

// console.log(convertHour("00:53"));
// console.log(convertHour("17:29"));

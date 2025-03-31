// let h1 = parseInt(prompt("Nhap gio 1"));
// let p1 = parseInt(prompt("Nhap phut 1"));

// let h2 = parseInt(prompt("Nhap gio 2"));
// let p2 = parseInt(prompt("Nhap phut 2"));

// if (h1 > h2) {
//   console.log(`${h1}:${p1} lon hon ${h2}:${p2}:`);
// } else if (h1 < h2) {
//   console.log(`${h1}:${p1} nho hon ${h2}:${p2}:`);
// } else if (p1 > p2) {
//   console.log(`${h1}:${p1} lon hon ${h2}:${p2}:`);
// } else if (p1 < p2) {
//   console.log(`${h1}:${p1} nho hon ${h2}:${p2}:`);
// } else {
//   console.log(`${h1}:${p1} bang ${h2}:${p2}:`);
// }

// let result = 0;
// for (let i = 1; i <= 100; i++) {
//   result = result + i;
// }

// console.log(result);

// for (let i = 0; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//   }
// }

// let n = 9;
// let result = 1;
// for (let i = 2; i <= n; i++) {
//   result = result * i;
// }
// console.log("🚀 ~ result:", result);

// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("--------");
// }

// let isStop = false;
// let sum = 0;

// do {
//   let number = parseInt(prompt("Nhap so nguyen"));
//   sum += number;
//   let answer = prompt("Ban co muon tinh tiep khong? (yes/no)");
//   if (answer === "no") {
//     isStop = true;
//     console.log("Tong la: ", sum);
//   }
// } while (!isStop);

// ("5 6 7 8 9");

// let number = parseInt(prompt("Nhap so nguyen"));

// let binary = "";

// for (let n = number; n > 0; n = Math.floor(n / 2)) {
//   let remainder = n % 2;
//   binary = remainder + binary;
// }

// console.log(binary);



const arrayNumber = [0, 1, 2];

// let x = arrayNumber[0];
// let y = arrayNumber[1];
// let z = arrayNumber[2];

let [x,y,z] = arrayNumber;

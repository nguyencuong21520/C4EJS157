// Bài 1
// let chieuDai = 300;
// let chieuRong = 10000;

// let chuVi = (chieuDai + chieuRong) * 2;
// let dienTich = chieuDai * chieuRong;

// console.log("Chu vi: ", chuVi);

// let result = `Dien tich hinh chu nhat co chieu dai la ${chieuDai} chieu rong ${chieuRong} la ${dienTich}`;
// console.log(result);

// let S = 13824;
// let S = prompt("Nhap so giay");
// S = parseInt(S);

// let hour = (S - (S % 3600)) / 3600;
// let minute = ((S % 3600) - ((S % 3600) % 60)) / 60;
// let second = S - minute * 60 - hour * 3600;

// console.log(hour + " gio " + minute + " phut " + second + " giay");

// let luyThua = prompt("Nhap luy thua");
// luyThua = parseInt(luyThua);
// let coSo = prompt("Nhap co so");
// coSo = parseInt(coSo);

// let ketQua = Math.pow(coSo, luyThua);
// console.log(`${coSo} ^ ${luyThua} = ${ketQua}`);

// let a = parseInt(prompt("Nhap a"));
// let b = prompt("Nhap b");
// let c = prompt("Nhap c");

// const avg = (a + b + c) / 3;

// let x1 = parseInt(prompt("Nhap x1"));
// let x2 = parseInt(prompt("Nhap x2"));
// let y1 = parseInt(prompt("Nhap y1"));
// let y2 = parseInt(prompt("Nhap y2"));

// let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// console.log("🚀 ~ distance:", distance);

let a = parseInt(prompt("Nhap a"));
let b = parseInt(prompt("Nhap b"));
let c = parseInt(prompt("Nhap c"));

let max = Math.max(a, b, c);
console.log(max == a);

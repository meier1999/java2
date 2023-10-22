
let box = "";
let a = +prompt("Son kiriting");
for (let i = 0; i < a; i++) {
  for (let j = 0; j < a; j++) {
    if (i == j || i == 0 || j == 0 || j == a - 1 || i == a - 1) {
      box += "⬛";
    } else {
      box += "⬜";
    }
  }
  console.log(box);
  box = "";
}

let ism = prompt("Ismingizni kiriting !!!");
let c = +prompt(" Hozirgi yilni kiriting !!!");
let d = +prompt(" Yoshingizni kiriting !!!");
function year(c,d ) {
    return c-d
}
alert(ism + " " +year(c,d))
console.log(ism + " " +year(c,d));


let o = +prompt("Ey podachi qo'ylarni san ")
while (isNaN(o) || o ==0 ) {
   o = +prompt("Podachiyuuuu qo'ylarni sana dedm harflarni emas ")
}
alfa=''
for (let v = 1; v < o; v++) {
  if (v==1) {
    alfa = alfa + v + "qo'ycha....."
  }
  else{
    alfa = alfa + v + "qo'ychalar....."
  }
}
console.log(alfa);




// let n = Math.round(Math.random() * 6)
// let m = Math.round(Math.random() * 6)
// let z = + prompt("Misollar yechamiz ")
// for (let p = 1; p < z; p++) {
//   let q = +prompt(`${n} + ${m}`)
//   let w = +prompt(`${n} - ${m}`)
//   let e = +prompt(`${n} * ${m}`)
//   let r = +prompt(`${n} / ${m}`)
//   let t = +prompt(`${n} % ${m}`)
//   // if ((n + m),(n-m),(n*m),(n/m),(n%m)) {
//   //   alert("javoblar to'g'ri ")
//   // }
//   // else {
//   //   "javobingiz nato'g'ri "
//   // }
// }
// function summ(n, m) {
//   return (n + m), (n - m), (n * m), (n / m), (n % m)
// }









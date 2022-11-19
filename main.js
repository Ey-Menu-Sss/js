// barcha pullar
let answer = prompt("Sizda nechi pul bor?");
//Tasodifiy kun
let kun = Math.floor(Math.random() * (30 - 3 + 3));
console.log(kun);
// console.log(answer);

//valyuta kurs
let dollar = 11250;
let yeuro = 12864;

// harajatlar:

let borish_kelish = dollar * 350;
let mex_tolov = dollar * 680;
let kongil_ochar = yeuro * 230;

// jami:

const jami = borish_kelish + mex_tolov + kongil_ochar;

// Max = 30
// Min = 3

if (answer >= jami) {
  document.querySelector("h1").textContent = "Oq Yo'l";
} else {
  document.querySelector(
    "h1"
  ).textContent = `Sizda pul yetarlicha emas ${kun} kundan keyin urinib ko'ring`;
}

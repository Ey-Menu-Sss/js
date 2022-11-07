let answer = prompt("sizda nechi pul bor?");

// console.log(answer);


let dollar = 9433.34;
let yeuro = 10354.03; 

// harajatlar:

let borish_kelish = dollar * 500;
let mex_tolov = dollar * 250;
let kongil_ochar = yeuro * 120;

// jami:

const jami = borish_kelish + mex_tolov + kongil_ochar;

if(answer >= jami){
    document.querySelector("h1").textContent = "Oq Yo'l";
}else{
    document.querySelector("h1").textContent = "sizda pul yetarlicha emas!";
}


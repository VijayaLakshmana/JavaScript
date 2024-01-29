const fruits = ["apple","bannana","grapes","orange"];

let i = 0;
let text = "";
while (fruits[i]) {
  text += fruits[i] + "<br>";
  i++;
}

document.getElementById("demo").innerHTML = text;
const header=document.createElement("h1")
const para=document.createElement("p")
header.textContent="vijay"
para.textContent="hello vijay"
document.body.append(header,para)

const input=document.querySelector("#name");
const value=document.getElementById("names");
input.addEventListener('keydown',displayKey);
function displayKey(e)
{
    names.textContent +=`${e.code}`
}



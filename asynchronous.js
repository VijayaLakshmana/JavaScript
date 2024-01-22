// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");
// setTimeout(()=>console.log("hello 1"),5000);
// setTimeout(()=>console.log("hello 2"));
// setTimeout(()=>console.log("hello 3"),2000);
// for(i=0;i<10;i++)
// console.log(i)

const btn=document.querySelector("button");
const number=document.querySelector("input");
const para=document.createElement("p");
btn.addEventListener("click",setAlarm)
function displayValue(value){
    return new Promise((resolve,reject)=>{
        if(value>0)
        resolve("hello")
     else
     reject("Enter the valid input")

    })
}

async function setAlarm(){
    try{
        const message=await displayValue(number.value);
        para.textContent=message

        setTimeout(() => {
            document.body.append(para);
        }, number.value);
    }
    catch(message){
        para.textContent=message;
        document.body.append(para);
    }
    
    }

function ticketBooking(){
    return new Promise((resolve,reject)=>{
        let bookingSuccess = false;
       if(bookingSuccess)
       setTimeout(resolve,1000,"Ticket booked for vijay")
    else
    reject("ticket is not booked for vijya")
    })
}
ticketBooking().then((message)=>console.log(message))
.catch((message)=>console.log(message));


// let person1= new Promise((resolve,reject)=>{
//         let bookingSuccess = true;
//        if(bookingSuccess)
//        setTimeout(resolve,1000,"Ticket booked for vijay")
//     else
//     reject("ticket is not booked for vijya")
//     })

//     let person2= new Promise((resolve,reject)=>{
//         let bookingSuccess = true;
//        if(bookingSuccess)
//        setTimeout(resolve,1000,"Ticket booked for ram")
//     else
//     reject("ticket is not booked for ram")
//     })

//     let person3= new Promise((resolve,reject)=>{
//         let bookingSuccess = true;
//        if(bookingSuccess)
//        setTimeout(resolve,3000,"Ticket booked for roshan")
//     else
//     reject("ticket is not booked for roshan")
//     })

//     // Promise.all([person1,person2,person3])
//     // .then((message)=>console.log(message))
//     // .catch((message)=>console.log(message))

//     // Promise.allSettled([person1,person2,person3])
//     // .then((message)=>console.log(message))
//     // .catch((message)=>console.log(message))

//     // Promise.any([person1,person2,person3])
//     // .then((message)=>console.log(message))
//     // .catch((message)=>console.log(message))

//     // Promise.race([person1,person2,person3])
//     // .then((message)=>console.log(message))
//     // .catch((message)=>console.log(message))

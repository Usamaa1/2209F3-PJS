
function msg1() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('first message');
            resolve();
        }, 2000)
    })
}

function msg2() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('second message');
            resolve();
        }, 3000)
    })
  
}

function msg3() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
        // console.log('third message');
        reject('third message rejected');
    }, 1000)
  })
}

function msg4() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('fourth message');
            resolve();
        }, 4000)
    })
   
}

function msg5() {
 return new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('fifth message');
        resolve();
    }, 1000)
 })
}



msg1().then(msg2).then(msg3).then(msg4).then(msg5).catch(error => console.log(error))




// divide



// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         if(b === 0){
//             reject('0 is not a applicable for division');
//         }
//         else{
//             console.log(a / b);
//             resolve();
//         }
//         })
// }

// divide(4,8)





// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         if(b === 0){
//             reject('0 is not a applicable for division');
//         }
//         else{
//             console.log(a / b);
//             resolve();
//         }
//         })
// }

// divide(4,8)













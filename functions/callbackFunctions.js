function msg1(cb) {
    setTimeout(() => {
        console.log('first message');
        // cb();
    }, 2000)
}

function msg2(cb) {
    setTimeout(() => {
        console.log('second message');
        // cb();
    }, 3000)
}

function msg3(cb) {
    setTimeout(() => {
        console.log('third message');
        // cb();
    }, 1000)
}

function msg4(cb) {
    setTimeout(() => {
        console.log('fourth message');
        // cb();
    }, 4000)
}

function msg5() {
    setTimeout(() => {
        console.log('fifth message');
    }, 1000)
}


// msg1()
// msg2()
// msg3()
// msg4()


// msg1(() => {
//     msg2(() => {
//         msg3(() => {
//             msg4(() => {
//                 msg5()
//             })
//         })
//     })
// })













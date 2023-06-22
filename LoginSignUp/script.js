let loggedArray;
(() => {

    let userLogged = localStorage.getItem('loggedUser')
    console.log(userLogged)


    loggedArray = JSON.parse(userLogged)


    if(!userLogged){
    window.location.href = 'login.html'
    }

})()

console.log(loggedArray)

document.getElementById('name').innerHTML = loggedArray.firstName



let logOut = () => {
   localStorage.removeItem('loggedUser');

   window.location.href = 'login.html'

}






// 4 + 6 - 8 + 9 * 10 - 3

// 4 + 6 - 8 + 90 - 3
// 10 - 8 + 90 - 3
// 2 + 90 - 3
// 92 - 3
// 89



// -79 -3
// 2 + 9 - 10 -3
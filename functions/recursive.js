// function add(a){

//     if (a <= 4) return;

//     console.log(a);


//     add(a - 1);
// }

// add(10);






// let userValue = prompt("Enter number for factorial");


// function factorial(num) {

//     if (num <= 1) return 1;

//     // 5 * 4 * 3 * 2 * 1 = 120
//     return num * factorial(num - 1)

// }

// console.log(factorial(userValue));





let family = {
    name: "John",
    childrens: [
        {
            name: "Doe",
            childrens: [{
                name: "Leo",
                childrens: []
            }]
        },
        {
            name: "Jane",
            childrens: [{
                name: "Mary",
                age: 30,
                childrens: []
            }]
        },
        {
            name: "James",
            childrens: [{
                name: "Ana",
                childrens: [
                    {
                        name: "Lisa",
                        childrens: [
                            {
                                name: "Sarah",
                                childrens: []
                            }
                        ]
                    }
                ]
            }]
        }
    ]
}




function printChildren(familyTree){

    if(familyTree.childrens === 0) return;

    familyTree.childrens.map(child=>{
        console.log("child name",child.name);
        console.log("age: ",child.age);
        printChildren(child)
    })

}

printChildren(family)












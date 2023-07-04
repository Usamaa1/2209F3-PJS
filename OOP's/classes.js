// blueprint for creating objects

// function BankAccount(accountTitle, accountNumber, amount){
//     this.accountTit = accountTitle;
//     this.accountNumber = accountNumber;
//     this.amount = amount;
//     BankAccount.prototype.deposit = function(am){
//         this.amount += am;
//     }

// }





// let amjadAccount = new BankAccount('Amjad Khan',767342647237, 900)
// let talibAccount = new BankAccount('Talib Uddin',42647237, 600)


// amjadAccount.deposit(7000)
// talibAccount.deposit(12000)



// console.log(amjadAccount,talibAccount);





// ********* OOP's **********


class BankAccount{
    constructor(accountTitle, accountNumber, amount){
        this.accountTitle = accountTitle;
        this.accountNumber = accountNumber;
        this.amount = amount;
    }

    deposit(am){
        this.amount += am;
    }

    


}


let amjadAccount = new BankAccount('mjad Khan',767342647237, 900)
let talibAccount = new BankAccount('Talib Uddin',42647237, 600)


amjadAccount.deposit(7000)
talibAccount.deposit(4000)


console.log(amjadAccount,talibAccount);

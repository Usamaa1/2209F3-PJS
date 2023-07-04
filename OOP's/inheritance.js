const accountArray = [];

class HabibBankAccount {
    constructor(accountNumber, accountTitle, balance) {
        this.accountNumber = accountNumber;
        this.accountTitle = accountTitle;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    static createAccount(accountNumber, accountTitle, balance) {
        const account = new HabibBankAccount(accountNumber, accountTitle, balance);
        accountArray.push(account);
    }

}

HabibBankAccount.createAccount(67989489,'Amjad Sabri', 5600)








class AlfalahBankAccount extends HabibBankAccount {
    constructor(accountNumber, accountTitle, balance) {
        super(accountNumber, accountTitle, balance)
    }
    
    // withdraw(amount){
    //     this.balance -= amount;
    // }
}


class FaisalBankAccount extends HabibBankAccount {
    constructor(accountNumber, accountTitle, balance) {
        super(accountNumber, accountTitle, balance)
    }
    
}


let Amjad = new HabibBankAccount(486366767676, 'Amjad Khan', 900);
let Amjad2 = new AlfalahBankAccount(78956455678, 'Amjad Khan', 1000);
let Amjad3 = new FaisalBankAccount(8323255678, 'Amjad Khan', 50000);

// deposit
Amjad.deposit(600)
Amjad2.deposit(100)
Amjad3.deposit(100000)

// withdraw
Amjad2.withdraw(10)
Amjad.withdraw(50)
Amjad3.withdraw(30)

console.log(Amjad, Amjad2, Amjad3);
console.log(accountArray);

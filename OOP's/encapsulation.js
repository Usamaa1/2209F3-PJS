class HabibBankAccount {
    #pincode;
    constructor(accountNumber, accountTitle, balance, pincode) {
        this.accountNumber = accountNumber;
        this.accountTitle = accountTitle;
        this.balance = balance;
        this.#pincode = pincode;
    }

    deposit(amount) {
        this.balance += amount;
    }

  
    set pincode(newPincode) {
        this.#pincode = newPincode;
    }

    get pincode(){
        console.log(this.#pincode);
        
    }


}



let zahidAccount = new HabibBankAccount(82378878,'Zahid Supari', 56000, 5462)

// zahidAccount.pincode = 323

// zahidAccount.pincode


console.log(zahidAccount);







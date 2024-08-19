class BankAccount {
  private balance: number;
  private accountNumber: number;
  private customerName: string;

  constructor(customerName: string, balance: number) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
      return this.balance;
    } else {
      return `You can only deposit amount greater than 0`;
    }
  }
  withdraw(amount: number) {
    if (amount <= this.balance && amount > 0) {
      this.balance -= amount;
      return this.balance;
    } else if (amount >= this.balance) {
      return `Insufficient Funds. Your account balance is ${this.balance} Rs`;
    } else {
      return `You can only withdraw amount greater than 0`;
    }
  }
}

let acc1 = new BankAccount("Mudassir Zaman", 1000);
console.log(acc1.deposit(1000));
console.log(acc1.withdraw(1000000));

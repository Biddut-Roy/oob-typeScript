{
    // Access Modifiers
    class BankAccount{
       public readonly id: number;
       public name: string;
    //    private _balance: number;
       protected _balance: number;
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(ammount:number){
            this._balance += ammount;
        }
        getBalance(){
            return this._balance;
        }
    };

    class Student extends BankAccount{
        test(){
            this._balance
        }
    }

    const goribManus = new BankAccount(12,"akas", 500);
    // goribManus.balance
    goribManus.addDeposit(500)
    const accessBalance = goribManus.getBalance();
    console.log(accessBalance);
    
}
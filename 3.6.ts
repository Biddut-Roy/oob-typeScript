{
    // Getter And Setter

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
            // addDeposit(ammount:number){
            //     this._balance += ammount;
            // }
            // getBalance(){
            //     return this._balance;
            // }

            set Deposit (ammount : number){
                this._balance += ammount;
            }

            get Balance () {
                return this._balance;
            }
        };
    
        class Student extends BankAccount{
            test(){
                this._balance
            }
        }
    
        const goribManus = new BankAccount(12,"akas", 500);
        
        const Balance = goribManus.Deposit= 10
        const accessBalance = goribManus.Balance;
        console.log(Balance);
        console.log(accessBalance);
        
        
    }
}
{
    // Statics In OOP
    class Counter {
        // count : number = 50;
       static count : number = 50;
        // increment(){
        //     return this.count += 1;
        // }
        increment(){
            return Counter.count += 1;
        }
        decrement(){
            return Counter.count -= 1;
        }
    }

    const increment1 = new Counter();
    console.log(increment1.increment());

    const increment2 = new Counter();
    console.log(increment2.increment());
    
}
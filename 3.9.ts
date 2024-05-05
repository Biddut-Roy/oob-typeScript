{
    // Abstraction In OOP
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    };

    class Car implements Vehicle1{
        startEngine(): void {
            console.log("I am starting the car Engine");
            
        }
        stopEngine(): void {
            console.log("I am stop the car Engine");
            
        }
        move(): void {
            console.log("I am move a car");
            
        }
        test(): void {
            console.log("I am testing a engine");
            
        }
    };

    const toyota = new Car();
     toyota.startEngine()







    //  abstract class
    abstract class Vehicle2 {
      abstract  startEngine(): void;
      abstract  stopEngine(): void;
      abstract  move(): void;
    }

    class toyotaCar extends Vehicle2 {
        startEngine(): void {
            console.log("I am starting the car Engine");
            
        }
        stopEngine(): void {
            console.log("I am stop the car Engine");
            
        }
        move(): void {
            console.log("I am move a car");
            
        }
        test(): void {
            console.log("I am testing a engine");
            
        }
    };

    const toyota1 = new toyotaCar();
    toyota1.startEngine()
}
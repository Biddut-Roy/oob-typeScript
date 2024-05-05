{
    //  Inheritance In OOP.
     class parent {
        name : string;
        age : number;
        address : string;

        constructor(name : string, age : number , address : string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        makeSleep(sleepHour : number){
            console.log(`This is ${this.name} a sleep ${sleepHour}`);
            
        }
     }


     class Student extends parent {
        
        constructor(name : string, age : number , address : string){
           super(name, age, address);
        }
     }

     const student1 = new Student('ms basar', 12 , "dinajpur");
 

     class teacher extends parent {
        
        constructor(name : string, age : number , address : string, public position:string){
           super(name, age, address);
        }

        makeDeuty(TotalHOur : number){
            console.log(`Total time deuty ${TotalHOur}`);
            
        }
     };
     const Teacher = new teacher('msdbul', 12 , "dinajpur" , "departmentHead");
}
{
    // Polymorphism

    class Person {
        getSleep(){
            console.log(" I am seeping for 10 hr");
            
        }
    }

    class Student extends Person {
        getSleep(){
            console.log(" I am seeping for 8 hr");
            
        }
    }
    class Developer extends Person {
        getSleep(){
            console.log(" I am seeping for 6 hr");
            
        }
    }

    const getSleepingHours = ( param: Person) =>{
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person1)
    getSleepingHours(person2)
    getSleepingHours(person3)


    class Shape {
        getArea(){
            return 0;
        }
    }

    class Circle extends Shape{
        radius: number;
        constructor(radius: number){
            super();
            this.radius = radius;
        }

        getArea(){
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape{
        constructor( public height: number, public width: number){
            super();
        }

        getArea(){
            return  this.height * this.width;
        }
    }

    const getShapeArea = (param : Shape) => {
        console.log(param.getArea());
        
    }

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(10,20);

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)

}
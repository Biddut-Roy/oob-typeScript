{
    // Type Guard Using Instance Of

    class Animal {
        name: string;
        species: string;
        //  parameters type
        constructor( name: string,species: string ,){
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`This ${this.name} says`);
            
        }
    };

    class Cat extends Animal {
        constructor( name: string,species: string){
            super(name,species);
        }

        makeMawe(){
            console.log('cat is a maew');
            
        }
    };
    class Dog extends Animal {
        constructor( name: string,species: string){
            super(name,species);
        }
        makeGhew(){
            console.log("dog is a ghew");
            
        }
    };

    // smat way to handel 

    const isDog = (animal : Animal): animal is Dog  =>{
        return animal instanceof Dog;
    }
    const isCat = (animal : Animal): animal is Cat  =>{
        return animal instanceof Cat;
    }


    const getAnimal = (animal : Animal) =>{
        if (isDog(animal)){
            animal.makeGhew();
        }else if(isCat(animal)){
            animal.makeMawe();
        }
    }



    // 

    // const getAnimal = (animal : Animal) =>{
    //     if (animal instanceof Dog){
    //         animal.makeGhew();
    //     }else if(animal instanceof Cat){
    //         animal.makeMawe();
    //     }
    // }

     const dog = new Dog("jaki", "meaw");   
     const cat = new Dog("jakisss", "ghew");
     getAnimal(cat)
}
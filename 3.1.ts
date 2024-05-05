{
    // oob class
    class Animal {
        // name: string;
        // species: string;
        sound: string;

        //  parameters type
        constructor( public name: string,public species: string , sound: string){
            // this.name = name;
            // this.species = species;
            this.sound = sound;
        }

        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`);
            
        }

    }

    const dog = new Animal("german" , "dog" , "gheu gheu")
    const cat = new Animal("cat" , "cat" , "mewu mewu")
     dog.makeSound()
}
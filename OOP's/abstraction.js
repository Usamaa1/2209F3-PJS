class Creature{
   constructor(name,breed){
    this.name = name;
    this.breed = breed;
   }

   speak(voice){}

}


 class Birds extends Creature{
    constructor(name,breed){
     super(name,breed);
    }
 
    speak(voice){
     console.log(`This birds speaks ${voice}`);
    }
 
 }

 class Animal extends Creature{
    constructor(name,breed){
     super(name,breed);
    }
 
    speak(voice){
     console.log(`This animal speaks ${voice}`);
    }
 
 }




let parrot = new Birds('Parrot','Australian');

let cat = new Animal('Cat','Persian');

parrot.speak('squawk');

cat.speak('Meow');

console.log(parrot);




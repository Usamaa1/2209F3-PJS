
// poly ---> many

// morphism ---> form


 
 
  class Birds{
     constructor(name,breed){
        this.name = name;
        this.breed = breed;
     }
     speak(voice){
      console.log(`This birds speaks ${voice}`);
     }
  }
 
  class Animal extends Birds{
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
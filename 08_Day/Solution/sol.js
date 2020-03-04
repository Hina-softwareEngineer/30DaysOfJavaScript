//-----------------LEVEL 1------------------//

let dog={};
console.log(dog);

dog.name="Wicky";
dog.legs="four";
dog.color="brown";
dog.age=6;
dog.bark=function(){return "woof woof"};

console.log(Object.values(dog));
dog.breed="meat";
dog.getDogInfo=function(){
    return Object.values(dog);
}
console.log(Object.values(dog));

//-----------------LEVEL 2------------------//

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

var user=Object.keys(users);
var max=0;
let name="";
for (let u of user){
    if (users[u].skills.length>max){
        max=users[u].skills.length;
        name=u;
    }
}
var max_count=0;
var point=0;
for (let u of user){
    if (users[u].isLoggedIn==true){
        max_count+=1;
    }
    if(users[u].points>point){
        point=users[u].points;
    }
}

let count=0;
let mern=["MongoDB",'Express', 'React', 'Node'];
for (let u of user){
    let count=0;
    lang=users[u].skills;
    for (let i=0;i<lang.length;i++){
        if (mern.includes(lang[i])){
            count+=1;
        }

    // for (let skill of lang){
    //     return lang.every((skill));
    // }
}
if (count==4){
    console.log(u);
}
}

let Hina={email:"hinakhadim2002@gmail.com"};
Object.assign({},Hina);

Object.keys(users)
Object.values(users)

const Countries={
    name:"Pakistan",
    capital:'Islamabad',
    populations:2_00_000,
    languages:['Urdu',"English",'Punjabi','Sindhi']
}

Countries.name;
Countries.capital;
Countries.populations;
Countries.languages;

//-----------------------LEVEL 3-------------------//

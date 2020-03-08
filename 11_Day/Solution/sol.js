const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
];

const [e,pi,gravity,humanBodyTemp, waterBoilingTemp]=constants;

const [fin,est,sw,den,nor]=countries;

const [width,height,area,perimeter]=rectangle;

for (let {name,scores,skills,age} of users){
    if (skills.length<2){
        console.log(name);
    }
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name,skills,[score,jsScore,reactScore]]=student;
console.log(name, skills, score,jsScore, reactScore);

dict=[];
function convertArrayToObject(student){
    for (let [name,skills,scores] of students){
        dict.push({name,skills,scores});
    }
    return dict;
}
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

let copiedObject={...student};
copiedObject.skills.frontEnd.push({skills:"Bootstrap",level:8});
copiedObject.skills.backEnd.push({skills:"Express",level:9});
copiedObject.skills.dataBase.push({skills:"SQL",level:8});
copiedObject.skills.dataScience.push("SQL");


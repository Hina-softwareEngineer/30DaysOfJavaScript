///-------------------------LEVEL 1-----------------//

const arrary=Array();

const countries=['Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia'];
console.log(countries.length);
console.log(countries[0],countries[Math.floor(countries.length/2)],countries[countries.length-1]);

const mixedDataTypes=["int","float","double","long","string",
"char"];
console.log(mixedDataTypes.length);
const itCompanies=["Facebook,","Google","Microsoft","Applw","IBM","Oracle","Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length-1]);
console.log(itCompanies);
console.log(itCompanies.toString().toUpperCase());
console.log(itCompanies.join(", ")+" are big IT Companies.");
if(itCompanies.indexOf("Microsoft")!=-1){
    console.log("Microsoft");
}else{
    console.log("Micosoft is not found.");
}
var o=[];
for (var i=0;i<itCompanies.length;i++){
    try{
    if(itCompanies[i].match(/o/gi).length>1){
        o.push(itCompanies[i]);
    }    
}catch{
    console.log();
}
}
cons.log(o);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));
console.log(itCompanies.slice(Math.floor(itCompanies.length/2)-1,Math.floor(itCompanies.length/2)+2));
console.log(itCompanies.shift());
console.log(itCompanies.splice(Math.floor(itCompanies.length/2),1));
console.log(itCompanies.pop());
console.log(itCompanies.splice());

//------------------------------LEVEL 2-----------------------//

const countries=['Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'];
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
console.log(countries.concat(webTechs));
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let text=text.replace(/[^\w]/gi,"");
let words=text.split(" ");
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (shoppingCart.indexOf("Meat")==-1){
    shoppingCart.unshift("Meat");
}
if (shoppingCart.indexOf("Sugar")==-1){
    shoppingCart.push("Sugar");
}
console.log(shoppingCart.splice(shoppingCart.indexOf('Honey'),1));
shoppingCart[shoppingCart.indexOf("Tea")]='Green Tea';


if (countries.includes("Ethiopia")){
    console.log("Ethiopia".toUpperCase());
}
else{
    countries.push("Ethiopia");
    console.log(countries);
}

if (webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess.");
}
else{
    webTechs.push("Sass");
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack=frontEnd.concat(backEnd);
console.log(fullStack);

//---------------------------LEVEL 3----------------------//

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
console.log(Math.max(ages));
console.log(Math.min(ages));
console.log(ages[Math.floor(ages.length/2)]);
if (ages.length%2==0){
console.log(ages[Math.floor(ages.length/2)],ages[(Math.floor(ages.length/2))+1]);}
else{
    console.log(ages[Math.floor(ages.length/2)+1]);
}
cons.log(ages.reduce(function(a,b){return a+b;},0)/ages.length);
console.log(ages.slice(Math.max(ages)-Math.min(ages)));
let len=countries.length;
if (len%2==0){
    console.log(countries.slice(0,len/2),countries.slice(len/2,len));
}else{
    console.log(countries.slice(0,(len/2)+1),countries.slice((len/2)+1,len));
}
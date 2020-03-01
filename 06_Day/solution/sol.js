//-----------------------------LEVEL 1-------------------//

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


for (var i=0;i<11;i++){console.log(i);}
var j=0;
while(j<11){ console.log(j);       j++;}
var k=0;
do{
    console.log(k);
    k++;
}while(k<11);

for (var i=10;i>-1;i--){console.log(i);}
var j=10;
while(j>-1){ console.log(j);       j--;}
var k=10;
do{
    console.log(k);
    k--;
}while(k>-1);

for (var i=1;i<8;i++){
    console.log("#".repeat(i));
}

for (var i=0;i<11;i++){
    console.log(i," x ",i," = ",i*i);
}

console.log("i\t\ti^2\t\ti^3");
for (var i=0;i<11;i++){
    console.log(i,"\t\t",i*i,"\t\t",i*i*i);
}

for (var i=0;i<11;i++){
    if (i%2==0){console.log(i);}
}
for (var i=0;i<11;i++){
    if (i%2!=0){console.log(i);}
}

for (var j=2;j<101;j++){
    var count=0;
    var square=Math.floor(Math.sqrt(j));
   for (var i=2;i<=square;i++){
    if (j%i==0){
        count=1;
        break;
    }
}if (count==0){console.log(j," is a prime number.");}
}
var sum=0;
for (var i=1;i<101;i++){
    sum+=i;
}

var even=0,odd=0;
for (var i=1;i<101;i++){
    if (i%2==0){even+=i;}
    else{odd+=i;}
}
console.log("The sum of evens is ",even," and odd is ",odd);
console.log([even,odd]);

var arr=[];
for (var i=1;i<100;i++){
    var rand=Math.random()*10;
    if (arr.indexOf(rand)===-1){
    arr.push(rand);}
    if (arr.length){break;}
}

console.log(Math.random().toString(30).substr(7));

//-----------------------LEVEL 2 ------------------//

console.log(Math.random().toString(Math.floor(Math.random())));
console.log("#"+Math.floor(Math.random().toString(50).substr(7)));
console.log("rgb(",Math.floor(Math.random()*256),",",Math.floor(Math.random()*256),",",Math.floor(Math.random()*256));

var newarray=[];
var len=[];
for (var i=0;i<countries.length;i++){
    newarray.push(countries[i].toUpperCase());
    len.push(countries[i].length);
}
console.log(newarray);
console.log(len);

var newCountries=[]
for (var i=0;i<countries.length;i++){
    newCountries.push([countries[i],countries[i].toUpperCase().substr(0,3),countries[i].length]);
}

var land=[],ia=[],newArr=[];
for (var i=0;i<countries.length;i++){
    if (countries[i].includes("land")){
        land.push(countries[i]);
    }
    else{
        newArr.push(countries[i]);
    }
    if (countries[i].substring(countries[i].length-2,countries[i].length)=="ia"){
        ia.push(countries[i]);
    }
}
var num="";
for (var i=0;i<countries.length;i++){
    if (countries[i].length>num.length){
        num=countries[i];
    }
    if (countries[i].length==5){console.log(countries[i]);}
}
console.log(num);

number="";
for (var i=0;i<webTechs.length;i++){
    if (webTechs[i].length>number.length){
        nubmer=webTechs[i];
        console.log([webTechs[i],webTechs[i].length]);
    }
}
console.log(number);

mern="";
for (var i=0;i<mernStack.length;i++){
    mern+=mernStack[i].substr(0,1);
}

var fruit=['banana', 'orange', 'mango', 'lemon'];
for (var j=fruit.lenqth-1;j>=0;j--)
{console.log(fruit[j]);
}

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
for (var i=0;i<fullStack.length;i++){
    for (var frontend of fullStack[i]){console.log(frontend);}
}

//---------------------LEVEL 3-----------------------//
const copy=countries;
var sortedCoutries=countries.sort();
console.log(webTechs.sort(),"\n",mernStack.sort());
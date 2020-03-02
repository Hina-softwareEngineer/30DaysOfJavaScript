//------------------------------LEVEL 1---------------------//

function fullName(firstName,lastName){return(firstName+lastName);}
fullName("Hina","Khadim");
const addNumbers=function(a,b){return a+b;}
addNumbers(4,9);
function areaOfRectangle(length,width){return area*width;}
function perimeterOfRectangle(l,w){return 2*(l+w);}
const volumeOfRectPrism=function(len,wid,hei){return len*wid*hei;}
const areaOfCircle=(radius)=> Math.PI*radius*radius;
const circumOfCircle=(radius)=>Math.PI*2*radius;
function density(mass,volume){return mass/volume;}
function speed(distance,time){return distance/time;}
function weight(mass){return mass*9.8;}
function convertCelciusToFahrenheit(centigrade){return (centigrade*(9/5))+32;}
function BMI(weight,height){
    let bmi=weight/(height*height);
    if (bmi < 18.5){console.log("UnderWeight");}
    else if(bmi>=18.5 && bmi<=24.9){console.log("Normal Weight");}
    else if(bmi>=25 && bmi<=29.9){console.log("OverWeight");}
    else{console.log("Obese");}
}
function checkSeason(month){
    return ["Autumn","Winter","Spring","Summer"];
}
function findMax(){
    let maximum=0;
    for (var i=0;i<arguments.length;i++){
        if (arguments[i]>maximum){
            maximum=arguments[i];
        }
    }
}

//---------------------------------LEVEL 2---------------------//
function solveLinEquation(a,b,c){
    let slope=a/b;
    let x=-slope/a;
    let y=-slope/b;
    return {slope,x,y};
}

function solveQuadEquation(a,b,c){
    var x1=(-b+Math.sqrt((b*b)-(4*a*c)))/2*a;
    var x2=(-b-Math.sqrt((b*b)-(4*a*c)))/2*a;
    return {x1,x2};
}

function printArray(arr){arr.forEach(element => console.log(element));}
function showDateTime(){
    let date=new Date();
    console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);}
function swapValues(a,b){
    return (b,a);
}
function reverseArray(arr){
    for (var i=arr.length;i>=0;i--){
        console.log(arr[i]);
    }
}
function capitalizeArray(arr){
    for (var i=0;i<arr.length;i++){
        console.log(arr[i].toUpperCase());
    }
}
function addItem(item){var arr=[]; return arr.push(item);}
function removeItem(arr,index){ arr.splice(3,1);}
function sumOfNumbers(){
    let sum=0;
    for (var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }return sum;
}
function sumOfOdds(){
    let sum=0;
    for (var i=0;i<arguments.length;i++){
        if (arguments[i]%2==0)
        sum+=arguments[i];
    }return sum;
}
function evenAndOdds(num){
    console.log("Even: ",Math.floor((num/2))+1," Odd: ",Math.floor(num/2));
}
function sum(){
    let sum=0;
    for (var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }return sum;
}
function randomUserIp(){return Math.random().toString(36).substr(2,8);}
function macAddress(){
    "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
        return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
      });
}
function hexNumber(){
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
function randomId(){
    Math.random().toString(36).substring(2, 9);
}

//--------------------------LEVEL 3-------------------------//

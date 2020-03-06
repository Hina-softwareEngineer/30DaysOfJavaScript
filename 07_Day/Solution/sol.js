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
function randomId(nchar){
    Math.random().toString(nchar*2).substring(2, nchar);
}

//--------------------------LEVEL 3-------------------------//

var nchar=prompt("Number of Character: ");
var nIds=prompt("Number of Ids: ");
function userIdgeneratedByUser(nchar=nchar,nIds=nIds){
    for (var i=0;i<=nIds.length;i++){
        randomId(nchar);
    }
}
userIdgeneratedByUser();

function rgbColorGenerator(){
    return (`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`);
}

function arrayOfHexaColor(){
    var array=[];
    for (var i=0;i<=Math.floor(Math.random()*20);i++){
        array.push(hexNumber());
    }
    return array;
}

function rgbToHex(r,g,b){
    const red=r.toString(16);
    const green=g.toString(16);
    const blue=b.toString(16);

    if(red.length==1){red="0"+red}

    if(green.length==1){green="0"+green}

    if(blue.length==1){blue="0"+blue}
}   

function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  console.log(h.length)
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

  function generateColors(format,number){
      var colors=[];
      if (format=="hexa"){
          for (var i=0;i<number;i++){
              colors.push(hexNumber());
          }
      }
      else{
        for (var i=0;i<number;i++){
            colors.push(rgbColorGenerator());
        }
      }
 }

function shuffleArray(arr){
    var currentIndex=arr.length,tempValue,randIndex;
    while (0!==currentIndex){
        randIndex=Math.floor(Math.random()*currentIndex);
        currentIndex-=1;
    temp=array=arr[currentIndex];
    arr[currentIndex]=arr[randIndex];
    arr[randIndex]=temp;

    }
}

function factorial(number){
    var fact=1;
    for (var i=1;i<=number;i++){
    fact=fact*i}
    return number;
}

function isEmpty(arr){
    if (arr.length==0){
        return true;
    }
    return false;
}
function sum(arguments){
    var s=0;
    for (var i=0;i<arguments.length;i++){
        s=s+arguments[i];
    }
    return s;
}

function sumOfArrayItems(arr){
    var check=arr.every((item)=> typeof(item)=="number");
    if (check==true){
        var s=sum(arr);
    }
    else{
        return "Not a Nubmer";
    }
    return s; 
}

function average(arr){
    if (typeof(sumOfArrayItems(arr))=="number"){
        var avg=sumOfArrayItems(arr)/arr.length;
    }
    else{
        console.log("Not a number");
    }
    return avg;
}

function modifyArray(arr){
    if (arr.length<5){
        return "Not found";
    }
    else{
        arr[4]=arr[4].toUpperCase();
        return arr;
    }
}

function isPrime(number){
    if (number <2){return false;}
    else if (number==2){
        return true;
    }
    else{
        var count=0;
        var limit=Math.floor(Math.sqrt(number));
        for (var i=2;i<=limit;i++){
            if (number%i==0){
                count+=1;
            }
        }
        if (count==0){ return true;}
        else{
            return false;
        }
    }
}

function unique(arr){
    return arr.every((num,index)=> arr.indexof(num)==index);
}

function same_data_type(arr){
    return arr.every((item)=> typeof(item)===typeof(arr[0]));
}

function isValidVariable(variable){
    try{
        Function(variable+name);
    }
    catch(e){
        return false;}
    return true;
}

function randomNumber(){
    return function(){
    var arr=[];
    for (var i=0;i<7;i++)
    {arr.push(Math.floor(Math.random()*10));}
    return arr;}
}
randomNumber()()

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
function reverseCountries(arr){
    var array=arr;
    return arr.reverse();
}

//-----------------------LEVEL 3----------------------//

const personAccount={
    firstName:"",
    lastName:"",
    incomes:0,
    expenses:"",
    description:0,
    totalincome=function(){return this.incomes+this.description;},
    totalExpense=function(){return this.expenses+this.description},
    accountInfo=function(){},
    addIncome=function(){},
    accountBalance=function(){},
};

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function SignUp(user){
    var count=0;
    Object.values(users).map(function(name){
        if (name.username==user){
            console.log("User has already an account.");
        count=1;}
    });
    if (count==0){
        users.push({username:user});
        console.log("You added successfully.");
    }
}

function SignIn(user){
    var count=0;
    Object.values(users).map(function(name){
        if (name.username==user){
            console.log("User is signed in .");
        count=1;}
    });
    if (count==0){
        console.log("Sign UP first.");
    }
}

function rateProduct(key,rating){
    products[1].ratings=[{userId:key,rate:rating}];
}

function averageRating(){
    let sum=0,count=0;
    for (let i=0;i<products.length;i++){
    var total_ratings=products[i].ratings.forEach(function(item){
        sum+=item.rate;
        count+=1;
    });
}
    return sum/count;
}

function LikeProduct(user){
    products[i].likes.push(user);
}


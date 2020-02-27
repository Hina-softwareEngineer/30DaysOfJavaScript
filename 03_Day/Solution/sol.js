//--------------------------------LEVEL 1------------------------------//

let firstname="Hina",
    lastname="Khadim",
    country="Pakistan",
    city="Karachi",
    age=18,
    isMarried=false,
    year=2020;

console.log('10'===10);
console.log(parseInt('9.8')===10);
console.log(12==12);
console.log("Hina"=="Hina");
console.log(13>9);

console.log(14==12);
console.log("hina"=="Hina");
console.log(13<9);

console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4=='4');
console.log(4==='4');
console.log('python'.length>"jargon".length);

console.log(4> 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log((false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('python'.includes("on")==="jargon".includes('on')));

console.log(new Date().getFullYear());
console.log((new Date().getMonth())+1);
console.log(new Date());
console.log(new Date().getDate());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());

//------------------------------------LEVEL 2------------------------------//
let base=prompt("Enter base: ");
console.log("ENter base: ",base);
let height=prompt("Enter height of triangle: ");
console.log("Enter height: ",height);
console.log("The area of the trianlge is: ",0.5*base*height);

let side_a=parseInt(prompt("Enter side a: "));
let side_b=parseInt(prompt("Enter side b: "));
let side_c=parseInt(prompt("Enter side c: "));
console.log("The perimeter of the triangle is ; ",side_a+side_b+side_c);

let len=parseInt(prompt("enter length: "));
let wid=parseInt(prompt("enter width: "));
console.log(`The area of rectangle is : ${len*wid}\nThe perimeter of rectangle is ${2*(len+wid)}`);

let radius=parseInt(prompt("Enter radius of circle: "));
console.log("The area of circle is : ",Math.PI*radius*radius);
console.log("The circumference of circle is : ",Math.PI*2*radius);

let y=2*x-2;
let m=2;
console.log("X-intercept : ",-m/1, ' Y-intercept is : -2');

let y2=10,y1=2,x2=6,x1=2;
let slope=(y2-y1)/(x2-x1);
console.log("Slope is ",slope);

let x=-2;
let eq=x**2+(6*x)+9;
console.log("The value of y is ",eq);

let hours=prompt("Enter hours:");
let rate=prompt("Rate per hour: ");
console.log("Your weekly earning is : ",hours*rate);

let name=prompt("ENter name; ");
if (name.length>7){
    console.log("Your name is long.");
}
else{
    console.log("YOur name is short.");
}

let firstname="hina";
let lastname="Khadim";
if (firstname.length>lastname.length){
    console.log(`Your first name, ${firstname} is longer than your family name ${lastname}`);
}
else{
    console.log(`Your first name, ${firstname} is shorter than your family name ${lastname}`);
}

let myAge=250;
let yourAge=25;
console.log("I am ",myAge-yourAge," older than you.");

let birth=parseInt(prompt("ENter birth year: "));
let diff=new Date().getFullYear()-birth;
if ( diff > 18){
    console.log("You are ",diff,". You are old enough to drive.");
}
else{
    console.log("You are ",diff,". You will be allowed to drive after ",(18-diff)," years.");
}

let year=parseInt(prompt("Enter number of years you live: "));
console.log("You lived ",year*365.25*24*3600," seconds.");

let date=new Date();
console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);

//---------------------------LEVEL 3---------------------------//

const date=new Date();
console.log(`${date.getFullYear()}-${(date.getMonth()+1)<10?"0"+date.getMonth()+1:date.getMonth()+1}-${(date.getDate()+1)<10?"0"+date.getDate():date.getDate()} ${(date.getHours()+1)<10?"0"+date.getHours():date.getHours()}:${(date.getMinutes()+1)<10?"0"+date.getMinutes():date.getMinutes()}`);
//---------------------LEVEL 1------------------//

let input=prompt("Enter your Age: ");
if (input > 18){
    console.log("You are old enough to drive.");
}
else{
    console.log("YOu are left with ",18-input," years to drive.");
}

let age=prompt("Enter you age: ");
let myAge=18;

if (myAge>age){
    console.log("I am ",myAge-age," years older than you.");
}
else{
    console.log("You are ",age-myAge," years older than me.");
}

let a=4;
let b=3;

if (a>b){
    console.log(a," is greater than ",b);
}
else{
    console.log(b," is greater than ",a);
}

(a>b)?console.log(a," is greater than ",b):console.log(b," is greater than ",a);

let number=prompt("Enter a number : ");
if (number%2==0){
    console.log(number," is an even number.");
}
else{
    console.log(number," is an odd number.");
}

//----------------------LEVEL 2-----------------------//
let score=prompt("Enter your score: ");
if (score>=80 && score<=100){
    console.log("A");
}
else if(score>=70 && score<=89){
    console.log("B");
}
else if(score>=60 && score<=69){
    console.log("C");
}
else if(score>=50 && score<=59){
    console.log("D");
}
else{
    console.log("F");
}

let season=prompt("Enter Season: ");

switch(season){
    case "September":
    case "October":
    case "November":
        {console.log("Season is Autumn.");
        break;}
    case "December":
    case "January":
    case "February":
        {console.log("Season is Winter.");
        break;}
    case "March":
    case "April":
    case "May":
        {console.log("Season is Spring.");
        break;}
    case "June":
    case "July":
    case "August":
        {console.log("Season is Summer.");
        break;}
    default:
        console.log("No Season.");
}

let day=prompt("ENter day: ");

day=day.toLowerCase();

if (day=="saturday" || day=="sunday"){
    console.log(day[0].toUpperCase()+day.substr(1,(day.length-1))+" is a weekend Day.");
}
else{
    console.log(day[0].toUpperCase()+day.substr(1,(day.length-1))+" is a work Day.");

}

//-----------------------------------LEVEL 3------------------------//

let month=prompt("Enter month: ");
month=month.toLowerCase();

switch(month){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        {console.log(month[0].toUpperCase()+month.substr(1,month.length-1)+" has 31 days.");
    break;}

    case "april":
    case "june":
    case "september":
    case "november":
        {
            console.log(month[0].toUpperCase()+month.substr(1,month.length-1)+" has 30 days.");
        break;}
    case "february":
        {console.log("February has 28 days.");
        break;}
    default:
        console.log("No month.");
}

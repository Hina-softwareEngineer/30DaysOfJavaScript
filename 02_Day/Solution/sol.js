//----------------------LEVEL 1----------------//

let challenge="30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3,4));
console.log(challenge.substring(3,7));
console.log(challenge.substring(3,challenge.length));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
let newString='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(newString.split(","));
console.log(challenge.replace("JavaScript","Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(12));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let string2='You cannot end a sentence with because because because is a conjunction';
console.log(string2.indexOf("because"));
console.log(string2.lastIndexOf("because"));
console.log(string2.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match("a"));
console.log("30 Days of ".concat("JavaScript"));
console.log(challenge.repeat(2));



//------------------Level 2----------------//
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"");
console.log(typeof('10')==10);
console.log(Number('10')==10);
console.log(parseFloat('9.8')==10);
console.log(Math.round(9.8)==10);
console.log('Python'.includes("on"));
console.log('Jargon'.includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.floor(Math.random()*101));
console.log(Math.floor(Math.random()*51)+50);
console.log(Math.floor(Math.random()*256));
let string="JavaScript";
console.log(string[Math.floor(Math.random()*string.length)]);
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');
console.log(string2.substr(string2.search("because because because"),"because because because".length));


//-----------------------LEVEL 3----------------------------//
console.log("Love is the best thing in this world. Some found their love and some are still looking for their love.".match(/love/gi).length);
console.log("You cannot end a sentence with because because because is a conjunction".match(/because/gi));
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let sen=sentence.replace(/[^\w\s]/gi,"");  //  /[^\W ]/gi
console.log(sen);
let sen1='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
console.log(sen1.match(/\d+/g));
let array=sen1.match(/\d+/g);
console.log("The total income is : ",Number(array[0])+Number(array[1])+Number(array[2]));

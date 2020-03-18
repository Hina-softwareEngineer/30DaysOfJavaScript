//------------LEVEL 1-----------------//

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
];


// for each passes through values,
// map returns new array
// filter returns array on condiition
// reduce takes acc and next value

function call(){}

countries.forEach(country,function(country){console.log(country)})
names.forEach(function(name){console.log(name)});
numbers.forEach(function(num){console.log(num)});

countries.map(function(country){
    return country.toUpperCase();
});
countries.map(function(country){
    return country.length;
});
numbers.map(function(num){
    return num*num;
});
names.map(function(name){
    return name.toUpperCase();
});
products.map(function(prod){
    return prod.price;
});
countries.filter(country=> country.includes('land'));
countries.filter(country=> country.length==6);
countries.filter(country=> country.length>=6);
countries.filter(country=> country[0]=='E');
products.filter(p=> p.price>10);

function getStringlists(array){
    return array.filter(
        arr=>typeof(arr)=='string')
}
numbers.reduce((a,b)=>a+b)
let sen=countries.reduce((a,b)=> a+", "+b)
sen.concat(" are north European countries.")

// some returns true if any value is true.
// every returns true when all values are true.
names.some(function(name){return name.length>7});
names.every(country=> country.includes("land"));

// find gives element
// findIndex gives position

countries.find((country)=> country.length==6)
countries.findIndex((country)=> country.length==6)
countries.findIndex(country=> country=='Norway');
countries.findIndex(country=> country=='Russia');

//----------------LEVEL 2--------------------//

products.map(prod=>prod.price).filter(price=>typeof(price)=='number').reduce((a,b)=>a+b);
products.reduce((a.price,b.price)=>a.price+b.price);

countries.filter(country=> country.name.includes("land")|| country.name.includes("ia") || country.name.includes("island")|| country.name.includes("stan"))

let letter=countries.map(function(country){
    letter=country[0];
    return letter;
});
letter.sort();
var data=[];
for (var i=0;i<letter.length;i++){
    var last=data[data.length-1];
    if (last.letters==letter[i]){
        last.count++;
    }
    else{
        data.push({letters:letter[i],count:1});
    }
}
console.log(data);

function getFirstTenCountries(){
    return countries.map((country,index)=>{ if (index<10){return country.name;}}).slice(0,10);
}
function getLastTenCountries(){
    return countries.map(country=>country.name).slice(countries.length-10,countries.length);
}

//------------------LEVEL 3--------------//

countries.sort(function(a,b){
    if (a.name<b.name) return -1
    if (a.name>b.name) return 1
    return 0
});

countries.sort(function(a,b){
    if (a.capital<b.capital) return -1
    if (a.capital>b.capital) return 1
    return 0
});

countries.sort(function(a,b){
    if (a.population<b.population) return -1
    if (a.population>b.population) return 1
    return 0
});

function getMostSpoken(){
    lang=[];
    let lang1=countries.map(function(country){
        for (var i=0;i<(country.languages).length;i++){
            lang.push((country.languages)[i]);
        }
    });
    return lang;
}
let languages=getMostSpoken();
dict={};
for (let val of languages){
    if (dict && dict[val]){
        dict[val]+=1;
    }
    else{
        dict[val]=1;
    }
}
let ans=Object.entries(dict);
let ans1=ans.sort(function(a,b){ if (b[1]>a[1]){return 1}if (a[1]>b[1]){return -1}return 0; });
for (var i=0;i<10;i++){
    console.log("(",ans1[i][0]," , ",ans[i][1],")");
}

function getMostPopulated(){
    lang=[];
    countries.map(function(country){
            lang.push({country:country.name,population:country.population});
    });
    return lang;
}
let languages=getMostPopulated();
let countr=languages.sort(function(a,b){if (b.population>a.population){return 1}if (a.population>b.population){return -1}return 0;});
for (var i=0;i<10;i++){
    console.log(countr[i]);
}

const statistics={
    ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

    Count:function(){
        let c=0;
        for (var i=0;i<this.ages.length;i++){
        c+=1;}return c;
    },
    Sum:function(){
      return ages.reduce((a,b)=> a+b);
    },
    Min:function(){
        return Math.min(this.ages);
    },
    Max:function(){
        return Math.max(this.ages);
    },
    Range:function(){
        return 14;
    },
    Mean:function(){
        return this.Count/this.ages.length;
    },
    Median:function(){
        return this.ages[Math.floor(this.ages.length+1/2)];
    },
    Mode:function(){
        
    }
}
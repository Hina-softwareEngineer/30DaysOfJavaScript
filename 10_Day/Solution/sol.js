const a =[4, 5, 8, 9];
const b =[3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

let Set1=new Set();
for (var i=0;i<11;i++){
    Set1.add(i);
}

Set1.delete(3);
Set1.clear();
let array=[
    'hina','adiba','haseeb','khdaim','anseen'
]
let strings=new Set(array);

const map=new Map();
for (var i=0;i<countries.length;i++){
    map.set(countries[i]);
}

console.log(new Set([...a,...b]));
let A=new Set(a);
let B=new Set(b);
console.log(new Set(a.filter(num=> B.has(num))));
console.log(new Set(a.filter(num=> !B.has(num))));

let lang=[];
let languages1=countries.map(function(country){
        for (var i=0;i<(country.languages).length;i++){
            lang.push((country.languages)[i]);
    }
});
let set1=new Set(lang);

let dict=[];
for (let l of set1){
    const filtered=lang.filter(lng=> lng==l);
    dict.push({language:l,count:filtered.length});

}
let sorted=dict.sort(function(a,b){ if (b.count>a.count){return 1}if (a.count>b.count){return -1}return 0; });
for (var i=0;i<3;i++){
    console.log("(",sorted[i].language," , ",sorted[i].count,")");
}
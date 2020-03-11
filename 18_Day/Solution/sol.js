const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(countriesAPI)
.then(data=>data.json())
.then(res=>{
    res.forEach(country => {
        console.log(country.name,country.capital,country.languages,country.population,country.area);
    });
})
.catch(err=>{console.log(err)});

fetch(catsAPI)
.then(data=>data.json())
.then(
    res=>{
        res.forEach(cat=>console.log(cat.name));
    }
)
.catch(err=>{console.log(err)})


fetch(catsAPI)
.then(data=>data.json())
.then(
    res=>{
        res.forEach(cat=>console.log(cat.weight.metric));
    }
)
.catch(err=>{console.log(err)})


fetch(countriesAPI)
.then(data=>data.json())
.then(res=>{
    arr=[];
    res.forEach(country => {
        arr.push({Area:country.area,name:country.name});
    });
})
.catch(err=>{console.log(err)});

arr.sort(function (a,b){
    if (a.Area<b.Area) return 1; if (a.Area>b.Area) return -1; return 0;})

for (var i=0;i<10;i++){
    console.log(arr[i].name);
}

fetch(countriesAPI)
.then(data=>data.json())
.then(res=>{
    dict={}
    res.forEach(country => {
        console.log(country.name,country.languages.length);
        let language=country.languages;
        for (let val of language){
            if (dict && dict[val.name]){
                dict[val.name]+=1;
            }
            else{
                dict[val.name]=1;
            }
        }

    });
})
.catch(err=>{console.log(err)});

let arr=Object.keys(dict);
count=0;
for (var i=0;i<arr.length;i++){
    count+=dict[arr[i]];
}
console.log("The languages spoken in world are: ",count);

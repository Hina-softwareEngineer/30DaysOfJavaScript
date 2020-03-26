let box=document.querySelector(".box");
let satisfiedContent=document.querySelector(".satisfied");
let input=document.querySelector("input");

// styling of box element
box.style.display="flex";
box.style.justifyContent="space-around";
box.style.flexWrap="wrap";
box.style.padding="30px 5px";


// ON pageload show data and population graph
showData(countries);
showPopulation(countries);

// make changeArray to global so that every eventListener access its changing value
var changeArray=[...countries];

// input eventListener
input.addEventListener('input',function(){
    box.innerHTML="";

    let inputValue=input.value;
    let searchedLanguage=[];
    //filter countries by name, capital and language
    let array=countries.filter((country)=> (country.name).toLowerCase().includes(inputValue.toLowerCase()));
    let byCapital=countries.filter((country)=> (country.capital).toLowerCase().includes(inputValue.toLowerCase()));
    // filter countries by name
    countries.filter((country)=> { 
            for (var i=0;i<country.languages.length;i++){  
                let booleans=(country.languages[i]).toLowerCase().includes(inputValue.toLowerCase());
                if (booleans){
                    searchedLanguage.push(country);
                }
            }
    });  
    // Unique the country name 
    let CountriesSatisfiesSearch=[...array,...byCapital,...searchedLanguage];
    let toUnique=[];
    let UniqueObject=[];
    CountriesSatisfiesSearch.filter((country)=> {

        if (toUnique.includes(country.name)){}
        else{toUnique.push(country.name);
             UniqueObject.push(country);}     

    });
    changeArray=[...UniqueObject];
    // uploads content
    if (input.value==""){       satisfiedContent.textContent="";    }
    else{        satisfiedContent.textContent=changeArray.length+" countries satisfies the Search criteria";    }
    // show the data and show the population graph
    showData(changeArray);
    showPopulation(changeArray);
});


// function which show countries information
function showData(arr){
    box.innerHTML="";
     for (var i=0;i<arr.length;i++){
 
         // container
         let container=document.createElement("div");
         container.id="container";
         container.style.width="190px";
         container.style.textAlign="left";
         container.style.padding="10px";
         container.style.backgroundColor="#F7F9F9 ";
         container.style.marginTop="10px";
 
         // imageContainer
         let imageContainer=document.createElement("div");
         imageContainer.style.width="150px";
         imageContainer.style.height="90px";
         imageContainer.style.margin="0 auto";
 
         // image
         let img=document.createElement("img");
         img.style.width="100%";
         img.style.height="100%";
 
         let h2=document.createElement("h2");
         let p1=document.createElement("p");
         let p2=document.createElement("p");
         let p3=document.createElement("p");
 
         h2.style.textAlign="center";
         h2.style.fontSize="20px";
         h2.style.marginTop="30px";
         h2.style.fontWeight="500";
         h2.style.color="#FFC300";
 
 
         // let row=document.createElement("div");
         p1.textContent="Captial: "+ arr[i].capital;
         p2.textContent="Languages: "+arr[i].languages.join(", ");
         p3.textContent="Population: "+arr[i].population;
         h2.textContent=arr[i].name;
         img.src=arr[i].flag;
 
         imageContainer.appendChild(img);
         container.appendChild(imageContainer);
         container.appendChild(h2);
         container.appendChild(p1);
         container.appendChild(p2);
         container.appendChild(p3);
 
         box.appendChild(container);
     }
 }

// Buttons ascending order and descending order functionality
var count=1;
let order1=document.querySelector(".order1");
let order2=document.querySelector(".order2");
let order3=document.querySelector(".order3");
let nameBtn=document.querySelector(".name");
let capitalBtn=document.querySelector(".capital");
let populationBtn=document.querySelector(".population");


// name button order
nameBtn.addEventListener("click",function(){
    if (count==0){
        changeArray.sort((a,b)=> { if (a.name>b.name)return 1; if(a.name<b.name) return -1; return 0;});
        order1.innerHTML="<i class='fa fa-long-arrow-up'></i>";
        count=1;       
    }
    else {
        changeArray.sort((a,b)=> { if (a.name<b.name)return 1; if(a.name>b.name) return -1; return 0;});
        order1.innerHTML="<i class='fa fa-long-arrow-down'></i>";
        count=0;
    }
    order2.innerHTML="";
    order3.innerHTML="";
    showData(changeArray);
});
 
 
// capital order button
capitalBtn.addEventListener("click",function(){
    if (count==0){
        changeArray.sort((a,b)=> { if (a.capital>b.capital)return 1; if(a.capital<b.capital) return -1; return 0;});
        order2.innerHTML="<i class='fa fa-long-arrow-up'></i>";
        count=1;            
    }
    else {
        changeArray.sort((a,b)=> { if (a.capital<b.capital)return 1; if(a.capital>b.capital) return -1; return 0;});
        order2.innerHTML="<i class='fa fa-long-arrow-down'></i>";
        count=0;
    }
    order1.innerHTML="";
    order3.innerHTML="";
    showData(changeArray);
});
 

// population order button
populationBtn.addEventListener("click",function(){
    if (count==0){
        changeArray.sort((a,b)=> { if (a.population>b.population)return 1; if(a.population<b.population) return -1; return 0;});
        order3.innerHTML="<i class='fa fa-long-arrow-up'></i>";
        count=1;
        
    }
    else {
        changeArray.sort((a,b)=> { if (a.population<b.population)return 1; if(a.population>b.population) return -1; return 0;});
        order3.innerHTML="<i class='fa fa-long-arrow-up'></i>";
        count=0;
    }
    order2.innerHTML="";
    order1.innerHTML="";
    showData(changeArray);
});
 




// population graph
let subtitle=document.querySelector(".subtitle");
subtitle.textContent="Currently, We have "+countries.length+" countries";
let graphTitle=document.querySelector(".graph-title");
let graphwrapper=document.querySelector(".graph-wrapper");
let populateWorld=document.querySelector(".populationall");

// populate_world function
populateWorld.addEventListener("click",function(){
    graphwrapper.innerHTML="";
    graphTitle.textContent="Most Populated countries which satisfied Search Criteria";
    function getMostPopulated(){
        lang=[];
        changeArray.map(function(country){
            lang.push({country:country.name,population:country.population});
        });
        return {lang};
    }
    let mostlyPopulate=getMostPopulated().lang;
    let countr=mostlyPopulate.sort(function(a,b){if (b.population>a.population){return 1}if (a.population>b.population){return -1}return 0;});
    // get Most Populated.
    let totalPopulation=0;
    countries.forEach((country)=> totalPopulation+=country.population );
    displayPopulation(countr,totalPopulation);
});

//languages button
let languagesButton=document.querySelector(".languages");
languagesButton.addEventListener("click",function(){
    graphwrapper.innerHTML="";
    graphTitle.textContent="10 Most spoken languages in the world";
    showLanguages();
});



function showPopulation(changeArray){
    function getMostPopulated(){
        lang=[];
        changeArray.map(function(country){
            lang.push({country:country.name,population:country.population});
        });
        return {lang};
    }
    let mostlyPopulate=getMostPopulated().lang;
    let countr=mostlyPopulate.sort(function(a,b){if (b.population>a.population){return 1}if (a.population>b.population){return -1}return 0;});
    let totalPopulation=0;
    countries.forEach((country)=> totalPopulation+=country.population );
    displayPopulation(countr,totalPopulation);
}

function displayPopulation(array,totalPopulation){
    let graphwrapper=document.querySelector(".graph-wrapper");
    graphwrapper.innerHTML="<div><div style='margin:20px;width:190px;'>World</div><div style='height:50px;width:1050px;'>\
    <div style='background-color:#FFC300; height:inherit; width:"+Math.floor(totalPopulation/7500000)+"px; margin-left:0;'></div>\
    </div><div style='margin:20px;'>"+totalPopulation+"</div></div>";
    for (var i=0;i<10;i++){
        graphwrapper.innerHTML+="<div><div style='width:190px; margin-right:13px;'><p>"+array[i].country+"</p></div><div style='height:50px;width:1050px;'>\
    <div style='background-color:#FFC300; height:inherit; width:"+smallvalues(array[i].population)+"px; margin-left:0;'></div>\
    </div><div style='margin:20px;'>"+array[i].population+"</div></div>";
    }

    function smallvalues(val){
        if (val<7500000){
            return 4;
        }
        else{
            return Math.floor(val/7500000);
        }
    }
}



// Languages
function getMostSpoken(){
    lang=[];
    let lang1=countries.map(function(country){
        for (var i=0;i<(country.languages).length;i++){
            lang.push((country.languages)[i]);
        }
    });
    return lang;
}

function showLanguages(){
    let graphwrapper=document.querySelector(".graph-wrapper");
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
        graphwrapper.innerHTML+="<div><div style='margin:10px; width:190px;'>"+ans1[i][0]+"</div><div style='height:50px;width:950px;'>\
    <div style='background-color:#FFC300; height:inherit; width:"+Math.floor(parseInt(ans1[i][1])*10)+"px; margin-left:0;'></div>\
    </div><div style='margin:20px;'>"+ans1[i][1]+"</div></div>";
    }
}



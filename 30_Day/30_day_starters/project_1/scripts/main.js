let box=document.querySelector(".box");
box.style.display="flex";
box.style.justifyContent="space-around";
box.style.flexWrap="wrap";
box.style.padding="30px 5px";

showData(countries);

function renderData(){}




let input=document.querySelector("input");

input.addEventListener('input',function(){
    let inputValue=input.value;
    box.innerHTML="";

    let array=countries.filter((country)=> (country.name).toLowerCase().includes(inputValue.toLowerCase()));
    let byCapital=countries.filter((country)=> (country.capital).toLowerCase().includes(inputValue.toLowerCase()));
    
    let searchedLanguage=[];
    countries.filter((country)=> { 
            for (var i=0;i<country.languages.length;i++){  
                let booleans=(country.languages[i]).toLowerCase().includes(inputValue.toLowerCase());
                if (booleans){
                    searchedLanguage.push(country);
                }
            }
        });  

    let CountriesSatisfiesSearch=[...array,...byCapital,...searchedLanguage];
    let toUnique=[];
    let UniqueObject=[];
    CountriesSatisfiesSearch.filter((country)=> {
        if (toUnique.includes(country.name)){

        }
        else{
            toUnique.push(country.name);
            UniqueObject.push(country);
        }      
    });
    showData(UniqueObject);
});


let nameBtn=document.querySelector(".name");
let capitalBtn=document.querySelector(".capital");
let populationBtn=document.querySelector(".population");


// image.style.backgroundImage="url("+countries[i].flag+")";







let subtitle=document.querySelector(".subtitle");
subtitle.textContent="Currently, We have "+countries.length+" countries";

let graphTitle=document.querySelector(".graph-title");

let graphwrapper=document.querySelector(".graph-wrapper");

let populateWorld=document.querySelector(".population");


// populate_world function
populateWorld.addEventListener("click",function(){

    graphwrapper.innerHTML="";
    graphTitle.textContent="10 Most Populated countries in the world";


    // get Most Populated.
    function getMostPopulated(){
        lang=[];
        totalPopulation=0;
        countries.map(function(country){
                totalPopulation+=country.population;
                lang.push({country:country.name,population:country.population});
        });
        return {lang,totalPopulation};
    }


    let mostlyPopulate=getMostPopulated().lang;
    let total=getMostPopulated().totalPopulation;
    let countr=mostlyPopulate.sort(function(a,b){if (b.population>a.population){return 1}if (a.population>b.population){return -1}return 0;});
    
    
    
    let main=total/7500000;
    graphwrapper.innerHTML="<div><div style='margin:20px;width:190px;'>World</div><div style='height:50px;width:1050px;'>\
    <div style='background-color:#FFC300; height:inherit; width:"+Math.floor(main)+"px; margin-left:0;'></div>\
    </div><div style='margin:20px;'>"+total+"</div></div>";

    for (var i=0;i<10;i++){
        graphwrapper.innerHTML+="<div><div style='margin:10px; width:190px;'>"+countr[i].country+"</div><div style='height:50px;width:1050px;'>\
    <div style='background-color:#FFC300; height:inherit; width:"+Math.floor(countr[i].population/7500000)+"px; margin-left:0;'></div>\
    </div><div style='margin:20px;'>"+countr[i].population+"</div></div>";
    }
    
});

let languagesButton=document.querySelector(".languages");

languagesButton.addEventListener("click",function(){

    graphwrapper.innerHTML="";
    graphTitle.textContent="10 Most spoken languages in the world";
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
        graphwrapper.innerHTML+="<div><div style='margin:10px; width:190px;'>"+ans1[i][0]+"</div><div style='height:50px;width:950px;'>\
    <div style='background-color:#FFC300; height:inherit; width:"+Math.floor(parseInt(ans1[i][1])*10)+"px; margin-left:0;'></div>\
    </div><div style='margin:20px;'>"+ans1[i][1]+"</div></div>";
    }
    

});


function showPopulation(){

}

function showLanguages(){

}

let count=0;
function showData(arr){

    nameBtn.addEventListener("click",function(){
    if (count=0){
        arr.sort((a,b)=> { if (a.name<b.name)return 1; if(a.name>b.name) return -1; return 0;});
        count=1;
    }
    else {
        arr.sort((a,b)=> { if (a.name>b.name)return 1; if(a.name<b.name) return -1; return 0;});
        count=0;
    }
    });

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

    

capitalBtn.addEventListener("click",function(){});

populationBtn.addEventListener("click",function(){});
}
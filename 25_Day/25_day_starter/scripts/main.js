
let subtitle=document.querySelector(".subtitle");
subtitle.textContent="Currently, We have "+countries.length+" countries";

let graphTitle=document.querySelector(".graph-title");

let graphwrapper=document.querySelector(".graph-wrapper");

let populateWorld=document.querySelector(".population");
populateWorld.addEventListener("click",function(){

    graphwrapper.innerHTML="";
    graphTitle.textContent="10 Most Populated countries in the world";
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
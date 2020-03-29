let content=document.querySelector(".content");

let totalCountries=document.createElement("h4");
totalCountries.textContent="Total Number of Countries: "+countries.length+"";
totalCountries.style.color="white";
totalCountries.style.fontWeight="700";

content.appendChild(totalCountries);

let countriesSearch=document.createElement("p");
countriesSearch.style.color="white";
countriesSearch.style.fontSize="16px";
countriesSearch.style.margin="0px";

content.appendChild(countriesSearch);

let buttonDiv=document.createElement("div");

let button1=document.createElement("button");
let button2=document.createElement("button");
let button3=document.createElement("button");

button1.textContent="STARTING WORD";
button2.textContent="SEARCH WITH ANY WORD";
button3.innerHTML="<div class='buttons'><span class='arrow'>&#8595;</span><div class='container'>\
<span class='letter darkblue'>A</span>\
<span class='letter crimson'>Z</span>\
</div></div>";

button3.style.width="50px";

content.appendChild(button1);
content.appendChild(button2);
content.appendChild(button3);    

let div=document.createElement("div");
div.className="input1";
div.style.width="100%";
let input=document.createElement("input");
input.style.width="400px";
input.placeholder="Search country..."

div.appendChild(input);
let i=document.createElement("i");
i.className="fa fa-search";
div.appendChild(i);
content.appendChild(div);

let countryDiv=document.createElement("div");
countryDiv.className="country";


data(countries);


button1.addEventListener("click",function(){
    button1.className="active";
    button2.className="";
    button3.className="";
});

input.addEventListener('input',function(){
    if (button1.className=="active"){
    if (input.value==""){
        data(countries);
}
    else{
        let array=countries.filter((country)=> country.startsWith(input.value));
        countriesSearch.textContent="Countries containing "+input.value+" are "+array.length;
        data(array);
    }
}
if (button2.className=="active"){

    if (input.vaue==""){
        data(countries);
    }
    else{
        let array=countries.filter((country)=> {
            if (country.includes(input.value)){
                return country;
        }
    });countriesSearch.textContent="Countries containing "+input.value+" are "+array.length;
        data(array);
}}

});
button2.addEventListener("click",function(){
    button1.className="";
    button2.className="active";
    button3.className="";
});

button3.addEventListener("click",function(){
    button1.className="";
    button2.className="";
    button3.className="active";
    data(countries.reverse());    
});



function data(num){
    countryDiv.innerHTML="";
    for (i=0;i<num.length;i++){
        let countryName=document.createElement("div");
        if (num[i]===undefined){
    
        }else{
        countryName.className="column";
        countryName.innerHTML="<div style='height:inherit;border-radius: 5px; background-color:rgba(0,0,255 ,0.2)'></div><p style='margin-top:-120px;  color:white; font-weight:600; text-transform:uppercase;'>"+num[i]+"</p>"; 
        countryName.style.textAlign='center';
        countryDiv.appendChild(countryName);}
    }
    
    document.body.appendChild(countryDiv);
}


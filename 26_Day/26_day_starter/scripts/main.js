let content=document.querySelector(".content");

let totalCountries=document.createElement("h4");
totalCountries.textContent="Total Number of Countries: "+countries.length+"";

content.appendChild(totalCountries);

let countriesSearch=document.createElement("p");

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
input.style.textAlign="center";

div.appendChild(input);
let i=document.createElement("i");
i.className="fa fa-search";
div.appendChild(i);
content.appendChild(div);

let countryDiv=document.createElement("div");
countryDiv.className="country";
countryDiv.style.maxWidth="1100px";
for (i=0;i<countries.length;i++){
    let countryName=document.createElement("div");
    
    countryName.innerHTML="<section>"+countries[i]+"</section>";
    countryName.style.textAlign='center';
    countryName.style.width="150px";
    countryName.style.height="150px";
    countryName.style.margin="5px";
    countryName.style.marginLeft="15px";
    countryName.style.backgroundColor="red";
    countryName.style.display="inline-block";

    countryDiv.appendChild(countryName);
}

document.body.appendChild(countryDiv);




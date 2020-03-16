let wrapper=document.querySelector('.wrapper');

let a=asabenehChallenges2020;

let body=document.body;
body.style.backgroundColor="floralwhite";
body.style.fontFamily="Arial";
body.style.textAlign="center";


let heading1=document.createElement("h1");
heading1.innerHTML=a.challengeTitle+' in ';
let year=document.createElement('span');
year.textContent=a.challengeYear;
heading1.style.fontFamily="Helvetica";

year.style.fontSize="2em";
year.style.fontWeight='700';

let heading2=document.createElement("h2");
heading2.textContent=a.challengeSubtitle;
heading2.style.textDecoration='underline'
heading2.style.fontWeight='100';

heading1.appendChild(year);
wrapper.appendChild(heading1);
wrapper.appendChild(heading2);


function randomgenerator(){
    return "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
}

setInterval(function(){
    year.style.color=randomgenerator();
},1000);

function Dategiver(){
    let date=new Date();
    let months={1:'January',2:'February',3:'March',4:'April',5:'May',6:"June",
7:"July",8:'August',9:'September',10:'October',11:'November',12:'December'};
let monthName="";
    let month1=date.getMonth()+1;
    let date1=date.getDate();
    let year=date.getFullYear();
    for (var i=1;i<13;i++){
        if (month1==i){
            monthName=months[i];
        }
    }
    let hour=(date.getHours())<10?"0"+date.getHours():date.getHours();
    let min=(date.getMinutes())<10?"0"+date.getMinutes():date.getMinutes();
    let sec=(date.getSeconds())<10?"0"+date.getSeconds():date.getSeconds();
    return `${monthName},${date1} ${year} ${hour}:${min}:${sec}`;
}


let datetime=document.createElement('p');

setInterval(function(){
    let data=Dategiver();
    datetime.textContent=data;
    datetime.style.backgroundColor=randomgenerator();
},1000);

datetime.textContent=Dategiver();
datetime.style.margin='0 auto';
datetime.style.letterSpacing='1.2px';
datetime.style.maxWidth='220px';
datetime.style.padding='10px';
datetime.style.marginBottom='20px';
datetime.style.backgroundColor='burlywood';

wrapper.appendChild(datetime);

let ul=document.createElement("ul");

let len=a.challenges.length;

for (var i=0;i<len;i++){
    let li=document.createElement('li');
    li.textContent=a.challenges[i].name;

    let details=document.createElement('details');
    details.innerHTML='<summary>'+(a.challenges[i].name).substr(11)+'</summary>';
    for (var j=0;j<a.challenges[i].topics.length;j++){
        details.innerHTML+="<p>"+a.challenges[i].topics[j]+"</p>";
    }
    let p1=document.createElement('p');
    p1.textContent=a.challenges[i].status;
    p1.className='status';
    li.style.listStyleType="none";
    // li.style.display='inline';
    li.style.display="flex";
    li.style.justifyContent='space-between';
    p1.style.margin="0px";

    li.style.margin="10px";
    li.style.padding="20px";
    // details.style.display="inline-block";
    if (a.challenges[i].status=="Done"){
        li.style.backgroundColor="rgb(72,167,73)";
    }
    else if(a.challenges[i].status=="Ongoing"){
        li.style.backgroundColor="rgb(236,231,49)";
    }
    else{
        li.style.backgroundColor="rgb(220,82,82)";
    }


    li.appendChild(details);
    li.appendChild(p1);
    ul.appendChild(li);
}

// let skills=document.createElement("div");
// skills.style.display='inline-block';

// skills.appendChild();

ul.style.textAlign="left";

ul.style.margin="0 auto";
ul.style.maxWidth="700px";
wrapper.appendChild(ul);

let author=document.createElement("h2");
author.textContent=a.author.firstName+" "+a.author.lastName;
author.style.marginBottom="5px";
wrapper.appendChild(author);
let links=document.createElement("div");
for (var k=0;k<a.author.socialLinks.length-1;k++){
    let anchor=document.createElement("a");
    anchor.href=a.author.socialLinks[k].url;
    anchor.innerHTML=a.author.socialLinks[k].fontawesomeIcon;
    anchor.style.fontSize='28px';
    anchor.style.margin='5px';
    anchor.style.color="black";
    links.appendChild(anchor);
}
wrapper.appendChild(links);

let intro=document.createElement("p");
intro.textContent=a.author.bio;
intro.style.maxWidth="700px";
intro.style.margin="0 auto";
intro.style.marginTop="40px";
wrapper.appendChild(intro);

let every=document.createElement("div");

let titles=document.createElement("div");
let skills=document.createElement("div");
let qualifications=document.createElement("div");

for (var x=0;x<a.author.titles.length;x++){
    let lines=document.createElement('p');
    lines.textContent=a.author.titles[x][0]+" "+a.author.titles[x][1];
    titles.appendChild(lines);
}
wrapper.appendChild(titles);
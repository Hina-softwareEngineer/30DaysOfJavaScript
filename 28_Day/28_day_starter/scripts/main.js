
let dict=[
    {
    firstName:'MARTHA',
    lastName:'YOHANES',
    country:'FINLAND',
    scores:85,},
    {firstName:'DAVID',
    lastName:"SMITH",
    country:'UNITED KINGDOM',
    scores:84,},
    {firstName:'ASABENEH',
    lastName:'YETAYEH',
    country:'FINLAND',
    scores:75,},
    {firstName:'HINA',
    lastName:"KHADIM",
    country:'PAKISTAN',
    scores:90,},
    
];

let inputs=document.querySelectorAll("input");

let button=document.querySelector("button");

let box=document.querySelector(".box");
box.innerHTML="";


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
     return `${monthName.substr(0,3).toUpperCase()} ${date1},${year} ${hour}:${min}`;
}

dict.sort((a,b)=>{if(a.scores<b.scores)return 1; if (a.scores>b.scores)return -1; return 0;});
for (i=0;i<dict.length;i++){
    box.innerHTML+=uploadData(dict[i].id=i,dict[i].firstName,dict[i].lastName,dict[i].country,dict[i].scores);
}

button.addEventListener("click",function(){
    if (inputs[0].value=="" || inputs[2].value=="" || inputs[2].value=="" || inputs[3].value==""){
        document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".error").style.display="none";
        dict.push({firstName:inputs[0].value.toUpperCase(),lastName:inputs[1].value.toUpperCase(),country:inputs[2].value.toUpperCase(),scores:parseInt(inputs[3].value)});
        
dict.sort((a,b)=>{if(a.scores<b.scores)return 1; if (a.scores>b.scores)return -1; return 0;});
box.innerHTML="";
for (i=0;i<dict.length;i++){
    box.innerHTML+=uploadData(dict[i].id=i,dict[i].firstName,dict[i].lastName,dict[i].country,dict[i].scores);
}
        let data=document.createElement('div');
        data.className="data";
        let main=document.createElement('main');
        main.className="main";
        let name=document.createElement('p');
        name.className="name";
        let date=document.createElement("p");
        date.className="date";

        let country=document.createElement("div");
        country.className="country";
        let score=document.createElement("div");
        score.className="score";

        let bins1=document.createElement("div");
        bins1.className="bins";
        // let bin1=document.createElement("p");
        // bin1.className="bin";
        // let plus1=document.createElement("p");
        // plus1.className="plus";
        // let minus1=document.createElement("p");
        // minus1.className="minus";

    //     for (i=0;i<dict.length;i++){
    //         name.textContent=dict[i].firstName+" "+dict[i].lastName;
    //         date.textContent=Dategiver();

    //         country.innerHTML="<p>"+dict[i].country+"</p>";
    //         score.textContent="<p>"+dict[i].scores+"</p>";

    //         bins1.innerHTML="<p class='bin' id="+i+"><i class='fa fa-trash-o'></i></p>\
    //         <p class='plus' id="+i+">+5</p>\
    //         <p class='minus' id="+i+">-5</p>";
    //         // bins.innerHTML+="";
    //         // bins.innerHTML+=" <p class='plus' id="+i+">+5</p>";
    //         // bins.innerHTML+="<p class='minus' id="+i+">-5</p>";


    //         data.appendChild(main);
    //         main.appendChild(name);
    //         main.appendChild(date);

    //         data.appendChild(country);
    //         data.appendChild(score);

    //         data.appendChild(bins1);
           
    //         box.appendChild(data);
    //     }
     }
});
// "<div class='data'>\
//     <div class='main'>\
//         <p class='name'>"+first+" "+last+"</p>\
//         <p class='date'>"+Dategiver()+"</p>\
//     </div>\
//     <div class='country'><p >"+Country1+"</p></div>\
//     <div class='score'><p >"+Score1+"</p></div>\
//     <div class='bins' >\
//         <p class='bin' id="+id+"><i class='fa fa-trash-o'></i></p>\
//         <p class='plus' id="+id+">+5</p>\
//         <p class='minus' id="+id+">-5</p>\
//     </div>\
//     </div>";
let bins=document.querySelectorAll(".bin");
let plus=document.querySelectorAll(".plus");
let minus=document.querySelectorAll(".minus");

let word="";
bins.forEach((bin)=>{
    bin.addEventListener("click",function(dustbin){
        let ID=dustbin.target.getAttribute('id');
        dict=dict.filter((object)=> object.id!=ID);
        console.log(dict);
        sorting();
        this.parentNode.parentNode.remove();
                    
});
});

plus.forEach((five)=>{
    five.addEventListener("click",function(number){
        let ID=number.target.getAttribute('id');
        dict.forEach((object)=> {
            if (object.id==ID){
                object.scores+=5;
            }
        });
        sorting();
        let node=this.parentNode.parentNode.childNodes;
        node[5].innerText=parseInt(node[5].innerText)+5;            
});
});

minus.forEach((five)=>{
    five.addEventListener("click",function(number){
        console.log(dict);
        let ID=number.target.getAttribute('id');
        dict.forEach((object)=> {
            if (object.id==ID){
                object.scores-=5;
            }
        });
        sorting();
        console.log(this.parentNode.parentNode);
        console.log(this.parentNode.parentNode.childNodes);
        let node=this.parentNode.parentNode.childNodes;
        node[5].innerText-=5;
});
});

function uploadData(id,first,last,Country1,Score1){
    return "<div class='data'>\
    <div class='main'>\
        <p class='name'>"+first+" "+last+"</p>\
        <p class='date'>"+Dategiver()+"</p>\
    </div>\
    <div class='country'><p >"+Country1+"</p></div>\
    <div class='score'><p >"+Score1+"</p></div>\
    <div class='bins' >\
        <p class='bin' id="+id+"><i class='fa fa-trash-o'></i></p>\
        <p class='plus' id="+id+">+5</p>\
        <p class='minus' id="+id+">-5</p>\
    </div>\
    </div>";
}

function sorting(){
    dict.sort((a,b)=>{if(a.scores<b.scores)return 1; if (a.scores>b.scores)return -1; return 0;});
}
let marque=document.querySelector("h4");

function randomcolor(){
    return "rgb("+Math.floor(Math.random()*256)+" ,"+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+" )";
}

let techs=[
    ["&#x1f4bb;","Programmer"],
    ["&#128293;","Motivator"],
    ["&#128293;","Motivational speaker"],
    ["&#128214;","Content Creator"],
    ["&#127793;","Educator"],
    ["&#128212;","Instructor"],
];

let lang=['PYTHON','HTML','JAVASCRIPT','REACT','REDUX','NODE','MONGODB','NUMPY','PANDAS'];


let spans=document.querySelector(".spans");
let tech=document.querySelector(".techs");


// for (var k=0;k<techs.length;k++){
//     spans.innerHTML=techs[k][0];
//     tech.textContent=techs[k][1];
    
//     setTimeout(function(){
//         console.log("hia");
//     },10000);
// }

let i=0;
setInterval(function(){
    
    let length1=techs.length;
    spans.innerHTML=techs[i][0];
    tech.textContent=techs[i][1];
    i=i+1;
    
    if (i==length1){
        i=0;
    }    
},1500);


let python=document.querySelector(".tech");

let j=0;
setInterval(function(){
    let length2=lang.length;
    python.textContent=lang[j];
    python.style.color=randomcolor();
    j=j+1;

    if (j==length2){
        j=0;
    }
},1000);
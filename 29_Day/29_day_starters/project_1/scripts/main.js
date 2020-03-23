
let div=document.querySelector("div");
let h1=document.querySelector("h1");

let family=["Aldrich","Lato","Montserrat","Nunito","Oswald","Raleway","Raleway+Dots","Roboto"];
let fontweights=[100,200,300,400,500,600,700]

let letters=h1.textContent.split('');
let break1=document.createElement('br');


setInterval(() => {
    h1.textContent="";
    for (var i=0;i<letters.length;i++){
        let spans=document.createElement("span");
        spans.textContent=letters[i];
        spans.style.color=randomColor();
        if (letters[i]==" " && letters[i+1]=="H"){
            h1.appendChild(break1);
        }
        h1.appendChild(spans);
    }

        div.style.backgroundColor=randomColor();   
        h1.style.fontFamily=family[Math.floor(Math.random()*family.length)];
        h1.style.fontWeight=fontweights[Math.floor(Math.random()*fontweights.length)]; 
        console.log(h1.textContent);
    
}, 2000);

function randomColor(){
    return "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+" )";
}
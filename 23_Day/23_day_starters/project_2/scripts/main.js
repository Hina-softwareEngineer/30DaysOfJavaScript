let body= document.body;

let div1=document.createElement("div");

let press=document.createElement("p");
press.textContent="Press any Keyboard key";

body.style.textShadow="2px 2px 3px #838583 ";
body.style.fontFamily="Helvetica";
body.style.fontSize="50px";
body.style.fontWeight="700";
body.style.color="#1F201F ";
body.style.textAlign="center";
body.style.marginTop="250px";

press.style.padding="10px";
div1.style.width="700px";
div1.style.margin="0 auto";
div1.style.boxShadow="0 0 7px #BFC1BE,3px 5px 5px #BFC1BE ";
div1.style.marginBottom="30px";
div1.appendChild(press);

let div2=document.createElement("div");
let codekey=document.createElement("p");
div2.style.margin="0 auto";

div2.appendChild(codekey);

body.appendChild(div1);
body.appendChild(div2);

body.addEventListener("keydown",function(e){

    div2.style.boxShadow="0 0 7px #BFC1BE,3px 5px 5px #BFC1BE ";
    div2.style.width="150px";
    div2.style.height="150px";
    div2.style.textAlign="center";

    press.innerHTML="You pressed <span style='color: #59B425; text-shadow=1px 1px 1px black;'>"+e.code+"</span>";
    codekey.textContent=e.keyCode;
    codekey.style.color="#59B425 ";
    codekey.style.textShadow="1px 1px 1px black";
    codekey.style.paddingTop="40px";
    
});
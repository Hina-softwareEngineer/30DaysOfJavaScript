
let body=document.body;
body.style.textAlign="center";
body.style.margin="0 auto";
body.style.maxWidth="1000px";

let inp=document.createElement("input");
inp.setAttribute("type","text");
inp.placeholder="Generate more numbers...";

inp.style.margin="15px";
inp.style.margin="30px";
inp.style.padding="10px";
inp.style.fontSize="20px";
inp.style.outline="none";
inp.style.border=" 2px solid #65A241";
inp.style.width="700px";

let button=document.createElement("button");
button.textContent="Generate Numbers";
button.style.padding='10px';
button.style.fontSize='20px';
button.style.color="#EDEEED";
button.style.border="2px solid #5DA732";
button.style.backgroundColor="#65A241";

let wrapper=document.querySelector(".wrapper");

wrapper.appendChild(inp);
inp.focus();
wrapper.appendChild(button);

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

const isEven=num=>{
    return num%2==0;
}

const isOdd=num=>{
    return num%2!==0;
}
let div=document.createElement('div');
div.className="main";
let warning=document.createElement("p");
warning.style.paddingLeft="42px";
warning.style.marginTop="-100px";


button.addEventListener("click",function (){
    try{
    let main=document.querySelector(".main");
    main.innerHTML="";
}catch(e){
    console.log(e);
}      
    warning.textContent="";
    warning.style.color="red";
    warning.style.fontSize="18px"
    warning.style.textAlign="left";
    let gen_number=inp.value;
    if (gen_number===""){
        warning.textContent="Enter a number to generate. Please Fill the box.";
        wrapper.appendChild(warning);
    }
    else if (isNaN(parseInt(gen_number))){
        warning.textContent="Enter a number please.";
        wrapper.appendChild(warning);
    }
    else{
        warning.textContent="";
        wrapper.appendChild(warning);
    for (var i=0;i<= gen_number;i++){
        let box=document.createElement('div');
        box.className="box";
        box.innerHTML='<p style="margin-top:10px;">'+i+'</p>';
        box.style.width='100px';
        if (isPrime(i)){
            box.style.backgroundColor='#DE3204';
        }
        else if(isEven(i)){
            box.style.backgroundColor='#54C211';                    
        }
        else if (isOdd(i)){
            box.style.backgroundColor='#EFE80A';
        }
        box.style.height='50px';
        box.style.fontSize="32px";
        box.style.fontWeight="700";
        box.style.color="white";
        box.style.display="inline-block";
        box.style.margin="3px";
        div.style.marginTop="150px";
        div.appendChild(box);
    }

wrapper.appendChild(div);
}
});


       
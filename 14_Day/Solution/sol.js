throw "error"
//VM125:1 Uncaught error
//(anonymous) @ VM125:1
throw "hello"
//VM165:1 Uncaught hello
//(anonymous) @ VM165:1
throw error "hina"
//VM204:1 Uncaught SyntaxError: Unexpected string
throw new Error ("hina is a gogd girl")
//VM322:1 Uncaught Error: hina is a gogd girl
//    at <anonymous>:1:7

try {
    let hina=women';
}
catch(e){
    console.log(e);
}
finally{
    console.log("This will run whether error or not");
}
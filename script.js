let globalvar="i am global";
function showglobal(){
    console.log(globalvar);
}
showglobal()
function say(){
let name="javascript"
console.log("hai global scope");
console.log("within the function"+name);
}
say()
function voting(age){
    if(age>=18){
        const iscloudy=true;
        var israining=true;
        console.log("eligible")
        console.log(iscloudy);
    }
    console.log(israining);
}
voting(18)
//local scope (same as function or block scope depending on context)
//callback function

function text(){
    console.log("message");
}
function send(callback){
    console.log("message sended");
    setInterval(callback,3000);
}
send(text);
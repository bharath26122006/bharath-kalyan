let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours);
let minutes=currenttime.getminutes();
console.log(minutes);
let day=currenttime.getday();
console.log(day);

class Exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
}
let result=new Exam("bharath");

class bank{
    constructor(initalamount=0){
        this._balance=initalamount;
    
    }
    set _balance(amountdeposit){
        if(amountdeposit>0){
            this._balance+=amountdeposit;
            console.log(this._balance)
        }

    }

}
let add=new bank(10);
console.log(add);
add._balance=300;
console.log(add)

class addition{
    static math(a,b){
        return a+b
    }
}
console.log(addition.math(4,4))
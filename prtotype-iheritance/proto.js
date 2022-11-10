// !     Create Prototype

Object.prototype.mylength=function(){

    console.log(this.name + "lolol");
}

function fun1(){

}
let obj={
    name:"sjahgi"
}

// !     Prototype inhetience

function fun1(){

}
let obj1={
    name:"sjahgi"
}

let obj2={
    city:"asr"
}
obj2.__proto__=obj1;

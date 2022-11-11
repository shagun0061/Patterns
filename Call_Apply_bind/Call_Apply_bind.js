let student = {
  firstname: "sonu",
  lastname: "sharma",
  class: "BCA",
};

let teacher = {
  firstname: "raghu",
  lastname: "verma",
  class: "professor",
};

function getname() {
 console.log( `${this.firstname} + ${this.lastname} `);
}
function getsub(sub1, sub2) {
  this.subjects = [sub1, sub2];
}
//!                                       Call
// console.log( getname.call(student));
// console.log( getname.call(teacher));

//!                                       Apply

// console.log( getname.apply(student,["English","punjabi"]));
// console.log(student);

//!                                       Bind

let casdsa = getname.bind(student);
 casdsa();

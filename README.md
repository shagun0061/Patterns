# Patterns

<!--! {1} -->
<!--
 # # # # #
 # # # # #
 # # # # #
 # # # # #
-->

<!--? code   -->

let n = 5;

for (let j = 0; j < n; j++) {
let s = "";
for (let i = 0; i < n; i++) {
s += "#" + " ";
}
console.log(s);
}

<!--! {2} -->
<!--
 #
 # #
 # # #
 # # # #
 # # # # #
-->

<!--? code   -->

let n = 5;

for (let j = 0; j < n; j++) {
let s = "";
for (let i = 0; i <= j; i++) {
s += "#" + " ";
}
console.log(s);
}

<!--! {3} -->
<!--
 # # # # #
 # # # #
 # # #
 # #
 #
-->

<!--? code   -->

let n = 5;

for (let j = 0; j < n; j++) {
let s = "";
for (let i = 0; i < n; i++) {
s += "#" + " ";
}
console.log(s);
}

<!--! {4} -->
<!--
    *
   **
  ***
 ****
*****
-->

<!--? code   -->

let n=5;

let string="";
for(let i=0;i<n;i++){

for(let j=i;j<n-1;j++){
string+=" ";
}

for(let k=0;k<=i;k++){
string+="*"
}
string+="\n"
}
console.log(string);

 <!--! {5} -->
<!--
    *
   ***
  *****
 *******
*********
-->

<!--? code   -->

let n=5;

let string="";
for(let i=0;i<n;i++){

for(let j=i;j<n-1;j++){
string+=" ";
}

for(let k=0;k<=i;k++){
string+="*" + " "
}
string+="\n"
}
console.log(string);


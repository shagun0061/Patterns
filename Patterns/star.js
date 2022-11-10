 let n=5;


 let string="";
 for(let i=0;i<n;i++){
 
 for(let j=i;j<n-1;j++){
    string+=" ";
 }

 for(let k=0;k<=i;k++){
    string+="* "
 }
 string+="\n"
 }
 console.log(string);


    
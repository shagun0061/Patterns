# Patterns

 
1.  # # # # #
    # # # # #
    # # # # #
    # # # # #

    let n = 5;

    for (let j = 0; j < n; j++) {   <---outer loop
        let s = "";
            for (let i = 0; i < n; i++) {   <---inner loop
             s += "#" + " ";
            }
        console.log(s);
    }

 
2.  #
    # #
    # # #
    # # # #
    # # # # #

    let n = 5;

    for (let j = 0; j < n; j++) {   <---outer loop
    let s = "";
    for (let i = 0; i <= j; i++) {  <---inner loop
    s += "#" + " ";
    }
    console.log(s);
    }

 
3.  # # # # #
    # # # #
    # # #
    # #
    #

    let n = 5;

    for (let j = 0; j < n; j++) {   <---outer loop
    let s = "";
    for (let i = 0; i < n; i++) {   <---inner loop
    s += "#" + " ";
    }
    console.log(s);
    }

 
4.      *
       **
      ***
     ****
    *****

    let n=5;
    let string="";

    for(let i=0;i<n;i++){

    for(let j=i;j<n-1;j++){
        string+=" ";            ----> space adding making left decreasing triangle
    }

    for(let k=0;k<=i;k++){      ----> making right increasing triangle
        string+="*";
        
    }
    string+="\n"
    }
    console.log(string)

 
5.      *
       ***
      *****
     *******
    *********

 
5.1 let n=5;   

    let string="";
    for(let i=0;i<n;i++){   <---outer loop

    for(let j=i;j<n-1;j++){     <---space adding
    string+=" ";
    }

    for(let k=0;k<=i;k++){  <---inner loop star adding + space adding after star
    string+="*" + " "
    }
    string+="\n"    <---next line adding
    }
    console.log(string);

                                2nd way 

    let n=5;
    let string="";

    for(let i=0;i<n;i++){
    for(let j=i;j<=n;j++){
        string+=" ";
    }

    for(let k=0;k<=i;k++){
        string+="*";
        
    }

    for(let l=0;l<i;l++){
        string+="*"
    }
    string+="\n"
    }
    console.log(string) 

6   *********
     *******
      *****
       ***
        *

   let n=5;
    let string="";

    for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        string+=" ";
    }

    for(let k=i;k<n;k++){
        string+="*";
        
    }

    for(let l=i;l<n-1;l++){
        string+="*"
    }
    string+="\n"
    }
    console.log(string)
    
7       *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *    

    let n=5;
    let string="";
     
      ---------increasing mountain Pattern-----------

        for(let i=0;i<n-1;i++){

        for(let j=i;j<n-1;j++){
            string+=" ";
        }

        for(let k=0;k<=i;k++){
            string+="*";
            
        }

        for(let l=0;l<i;l++){
            string+="*"
        }
        string+="\n"
        }
        

      ---------decreasing mountain Pattern-----------
    
    for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        string+=" ";
    }

    for(let k=i;k<n;k++){
        string+="*";
        
    }

    for(let l=i;l<n-1;l++){
        string+="*"
    }
    string+="\n"
    }
    
    console.log(string)      
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
    for(let i=0;i<n;i++){   <---outer loop

    for(let j=i;j<n-1;j++){ <---space adding
    string+=" ";
    }

    for(let k=0;k<=i;k++){  <---inner loop star adding
    string+="*"
    }
    string+="\n"    <---next line adding                
    }
    console.log(string);

 
5.      *
       ***
      *****
     *******
    *********


    let n=5;

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


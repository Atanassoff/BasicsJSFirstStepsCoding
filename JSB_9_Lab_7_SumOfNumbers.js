function sumNumbers(n){
    let str = `${n}`;
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumNumbers(1234) 
//The sum of the digits is:10 
sumNumbers(564891) 
//The sum of the digits is:33 
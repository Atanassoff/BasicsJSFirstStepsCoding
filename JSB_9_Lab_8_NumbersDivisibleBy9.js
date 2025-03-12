function numsDivisibleBy9(n, m){
    let sum = 0;
    for(let i = n; i <= m; i++){
        if(i % 9 === 0){
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for(let i = n; i <= m; i++){
        if(i % 9 === 0){
            console.log(i);
        }
    }    
}

numsDivisibleBy9(100, 200) 
//The sum: 1683 
// 108 117 126 135 144 153 162 171 180 189 198
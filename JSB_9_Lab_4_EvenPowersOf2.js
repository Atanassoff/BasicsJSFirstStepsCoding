function evenPowersOf2(n){
    let num = 1; 
    for(let i = 0; i <= n; i += 2){
        console.log(num);
        num = num * 2 * 2;
    }
}
evenPowersOf2(3) 
//1 4 
evenPowersOf2(4)
//1 4 16 
evenPowersOf2(5) 
//1 4 16 
evenPowersOf2(6) 
//1 4 16 64 
evenPowersOf2(7) 
//1 4 16 64
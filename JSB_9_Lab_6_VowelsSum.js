function vowelsSum(str){
    let sum = 0;
    for(let i = 0; i <= str.length; i++){
        switch(str[i]){
            case "a":
                sum += 1;
                break;
                case "e":
                sum += 2;
                break;
                case "i":
                sum += 3;
                break;
                case "o":
                sum += 4;
                break;
                case "u":
                sum += 5;
                break;
                default:
                break;
        }
    }
    console.log(sum);
}
vowelsSum("hello") 
//6 
vowelsSum("hi") 
//3
vowelsSum("bamboo") 
//9 
vowelsSum("beer") 
//4 

//a e i o u
//1 2 3 4 5
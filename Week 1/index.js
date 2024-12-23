const num = 15;
const num2 = 5;

const sum = num + num2;
const product = num * num2;
const division = num / num2;
const difference = num - num2;

if(num2 > num){
    division = num / num2;
    difference = num - num2;
}

let bodmas = sum + (product * division)/difference - num;


console.log("The sum of", num , "and", num2, "is",sum);
console.log("The product of", num , "and", num2, "is",product);
console.log("The division of", num , "and", num2, "is",division);
console.log("The difference of", num , "and", num2, "is",difference);
console.log("sum + (product * division)/difference - num =",bodmas);







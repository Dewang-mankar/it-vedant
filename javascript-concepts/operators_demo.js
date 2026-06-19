// addition operator
function addition(a,b)
{
    return a+b;
}
console.log("Addition is:"+addition(5,7));
// substraction operator
function substraction(a,b)
{
    return a-b;
}
console.log("Addition is:"+substraction(12,8));
// multiplication operator
function multiplication(a,b)
{
    return a*b;
}
console.log("Multiplication is:"+multiplication(5,7));
// division operator
function division(a,b)
{
    return a/b;
}
console.log("division is:"+division(8,2));
// modulus operator
function modulus(a,b){
    return a%b;
}
console.log("Reminder is:"+modulus(5,2));
// is equal function
function isequal(a,b){
    if(a==b){
        return "Yes";
    }
    else{
        return "No";
    }
}
console.log("both the numbers are equal"+isequal(5,5));
// is greater number:
function isgreater(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log("The greater number is:"+isgreater(4,5));
// is smaller:
function issmaller(a,b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}
console.log("The smaller number is:"+issmaller(4,5));
// positive or negative
function number(a)
{
    if(a>0){
        return "positive";
    }
    else if(a<0){
        return "negative";
    }
    else{
        return "zero";
    }
}
console.log("The number is"+number(5));
console.log("The number is"+number(-5));
console.log("The number is"+number(0));
// can you vote 
function canvote(age){
    if(age>=18)
    {
        return "can vote";
    }
    else{
        return "can't vote";
    }
}
console.log("The person "+canvote(22));


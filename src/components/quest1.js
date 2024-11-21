// Q1 Write a function sum such that

// sum(1)(2)(3)(4)(5)() returns 15
// sum(3)(7)() returns 10 and so on

// Assumption: all inputs are integers



function one(x){
    
   let count = x; //taking count variable who has block scope  and assigning value
   function sum(y){
    if(y=== undefined) return count ;
    count += y;
    return sum;
       
    }
   
   return sum;
};


console.log(one(3)(2)());
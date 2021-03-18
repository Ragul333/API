 //odd number find
let num = [1,2,3,4,5,6,7,8,9,10];

const myFun = function oddNum(num){
    if(num%2===1){
        let odd = num;
        console.log(num);
    }
    return oddNum;
}

let test = num.map(myFun);
console.log(test);



//convert string to array

let a = "string";

const capFunction = function(a){
    return a.toUpperCase();
}

let b = a.capFunction();
console.log(b);


//sum of all num in an Array

let arr = [1,2,3,4,5];

const adFun3 = arr.reduce(function(acc, val){
    return acc + val;
});

let addArr = adFun3;
console.log(addArr);

//prime number 

function isPrime(num){
    if(num<2) return false;
    if(num===2)return true;
    if(num%2===0)return false;
    
    for(let fact=3; fact*fact<=num; fact+=2){
        if(num%fact===0)return false;
    }
    return true;
}

//Palindrome
var c = 121;
function Palnum()
			{
				var rem, temp, final = 0;
				var number = c;

				temp = number;
				while(number>0)
				{
					rem = number%10;
					number = parseInt(number/10);
					final = final*10+rem;
				}
				if(final==temp)
				{
					console.log("number is Palindrome");
				}
				else
				{
					console.log("number is not palindrome");
				}
			}

Palnum();




//Median of 2 sorted Array

function getMedian(ar1,ar2,n){
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1)
    {
      let temp = ar1[i];
      ar1[i] = ar2[j];
      ar2[j] = temp; 
      i--; j++;
    }
    ar1.sort();
    ar2.sort();
    return (ar1[n - 1] + ar2[0]) / 2;
  }
 
  
 
    let ar1 = [ 1, 12, 15, 26, 38 ];
    let ar2 = [ 2, 13, 17, 30, 45 ];
 
    let n1 = 5;
    let n2 = 5;
    if (n1 == n2)
      console.log("Median is "+ Math.round(getMedian(ar1, ar2, n1)));
    else
      console.log("Doesn't work for arrays of unequal size");




// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
 
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

getUnique(array);

//Rotate an array by k times and return the rotated array

const rotatedArr = function(x,y,z){

    let remove = x.splice((y-2),z);
let x1 = remove.concat(x);
console.log(x1);
    
}


let x = [1,2,3,4,5,6,7];
let y = x.length;
let z = 2;
console.log(rotatedArr(x,y,z));
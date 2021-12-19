

var factorial= function fact( n){   // function Expression -> Name function Expression .
    if(n==0){
      return 1;
    }
    return fact(n-1)*n;
}

console.log(factorial(6));
//  array and it's Methods;
var arr= [1,2,3,4];
arr.unshift(8);
arr.shift();
console.log(arr);
console.log(arr.length);
 // for each loop for array.....
function print(value ,index){

console.log(value +" "+ index);
}
student.forEach(print);
var arr= [1,2,3,45];
arr.forEach(print);

//  Objects
var student={

    name: "Rajesh",
    RollNo: 23,
    Sem:5,
    marks:100
};
// 
 // For in loop for Objects
for( var prop  in student){
  print(student, prop);
}


// SetTimer or SetInterval 0r clearInterval.....
var count=20;
  function print(){

    console.log(count);
    count--;
    if(count==0){
      clearInterval(id);
    }
  }
  var id=setInterval(print,1000);

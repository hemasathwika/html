
 //Adding comments
 //Variable
  //Data types
//Operators 
//Type Conversions
//Equality
 //Conditional statements
 //Looping code
 //Functions
 //Scope



//topic:VARIABLES
//in 2 ways we can declare variables 
//1st way

// let age = 22
// console.log(age)

//2nd way

//const salary = 20000
//console.log(salary)

//difference between those 2 ways is
//we can declare "let" without initializing a value whereas we cannot declare "const" without initializing if we do so we will get typerror
//example as follows

//let sum
//sum = 5
//console.log(sum)

//const salary
//salary = 2121
//console.log(salary)

//TOPIC-> DATATYPES:

//tells what type of data is to be stored in them.
//classified into primitive and non primitive.

//primitive comprised of 7 types
//1.string  2.number    3.boolean   4.undefined
//5.null    6.bigint    7.symbol

//non primitive is comprised of only 1 type also called as reference data types
//1.object

//EXAMPLES

//1.string: sequence of characters that represents a text value. in js surrounded with quotes.

const name = 'sathwika'
const college = "rljit"
const sem = `seventh sem`

//2.number: represents integers and floating point numbers.

const total = 20
const pi = 3.14

//3.boolean: represents logical entities like true or flase.

const isPrimaryNumber = true
const isNewUser = false

//4.undefined: not defined

//5.null: empty set

//remaining two types will be discussed later

//non primitive: in js object is a complex data type.
//an object contains properties like key-value pairs.

const person = {
    'firstName': 'hema',
    'lastName': 'sathwika',
    'age': 20
}

    //console.log(person)
    //console.log(person.firstName)
    //console.log(person.lastName)

//arrays

const oddNumbers = [1,3,5,7]
    //console.log(oddNumbers[0])  //to access the arrays we will specify the index number.

//Also we can assign multiple values to a single variable we won't get any error rather than it takes the last assigned value as input.
//example as follows:
let a = 10
a = 'sathwi'
a = true
    //console.log(a)


//TOPIC-> OPERATORS:
//It is a special symbol used to perform operations on values and variables. 

//List of operators:
//1.Assignment opr
//2.arithmetic opr
//3.comparision opr
//4.logical opr
//5.string opr
//6.other opr

//examples

let x = 10
let y = 20

    //console.log(x + y)
     //console.log(x - y)
      //console.log(x * y)
       //console.log(x / y)
        //console.log(x % y)
         //console.log( ++ y)
          //console.log(--y)

           //3.console.log(x == y)
//4.
 const isValidNumber = x > 8 && 8 > y
    //console.log(isValidNumber)


//TOPIC-> TYPE CONVERSIONS:
//2 types-> 1.implicit conversion/coercion : automatically the type will be converted.
        // 2.explicit conversion : the type should be converted manually.

//examples of implicit

    //console.log(2 + '3')
    //console.log(true + '3')
    //console.log('4' + '3')
    //console.log('sru' + 'thi')

//examples of explicit

    //console.log(parseFloat('3.14'))
    //console.log(boolean(10)) //nan,undefined,null,'' will return false.




//TOPIC-> EQUALITY:
//== (allows implicit conversion)
//=== (does not allow implicit conversion)


//TOPIC-> CONDITIONAL STATEMENTS

//1.if  2.else  3.else if   4.switch

//examples

   // const num = 5
   // if(num > 0){

   //     console.log('number is positive')
    //}else {
     //    console.log('number is not positive')
    //  }



//TOPIC-> LOOPING STATEMENTS

//1.For loop    2.While     3.Do while  4.For of 

//1.for loop syntax
//for(initializer;condition;final-expression){ code }

    //for(let i=1;i<=5;i++){
       // console.log('iteration number'+i)
    //}

//2.while loop syntax
//initializer
//while(condition){
//code 
//final-expresiion
//}

    //let i = 1
     //while(i<=5){
        //console.log('iteration number'+i)
        //i++
    //}

//TOPIC-> FUNCTIONS

//syntax:
//function name(parameter1, parameter2, parameter3){ code }

    //function greet(){
    //    console.log('gd mng vishu')
    //}

    //greet()

    //using a parameter by giving username as dynamic

    //function greet(username){
    //  console.log('gd mng '+username)
    //}

    //greet('sathwika')
    //greet('sarayu')
    //greet('sathwik')
//A function can also written using arrow keyword
    //const arrowSum = (a,b) => a + b

    //const sum = arrowSum(10, 10)
    //console.log(sum)
  
//TOPIC-> SCOPE

//3 types: block,function and global






//JavaScript Events

//1.mouse events:
//click,double click , mouseover, mouseout, mouse move

//2.keyboard events:
//keydown, keyup, keypress

//3.focus events:
//focus, blur, focus in, focus out

//4.form events:
//submit, reset, change


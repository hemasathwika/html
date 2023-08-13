let pizza = true;
pizza=false;
console.log(pizza); // false


const pizza1 = true;
console.log(pizza1); // Output: true

//pizza1 = false;
//console.log(pizza1); // TypeError: Assignment to constant variable

//question 3
var topic = "Javascript";

if (topic){
    let topic = "React";
    console.log(topic); // Output: React
}

console.log(topic); // Output: Javascript

//question 6: DONE

//question 7
let container = document.getElementById("container");

//question 8
for(let i=1; i<=5; i++){
    let divElement = document.createElement("div");
    divElement.addEventListener("click",function(){
        alert('clicked ${i}');
    });
    container.appendChild(divElement);

}

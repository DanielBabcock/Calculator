console.log("calculator.js: ");

// **********************
// *    Get elements:      *
// **********************
let x = document.getElementById("entryDataA");
let y = document.getElementById("entryDataB");
let answer = document.getElementById("answerArea");
let multipling = document.getElementById("multiply");
let dividing = document.getElementById("divide");
let adding = document.getElementById("add");
let subtracting = document.getElementById("subtract");

// **********************
// *    Add listeners:      *
// **********************
multipling.addEventListener("click", function(){
  calculation(multiplyBy);
});
dividing.addEventListener("click", function(){
  calculation(divideBy);
});
adding.addEventListener("click", function(){
  calculation(addTo);
});
subtracting.addEventListener("click", function(){
  calculation(subtractFrom);
});

// **********************
// *    Declare funtions:      *
// **********************

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplyBy(event){
  let multipliedResult = x.value * y.value;
  console.log("multipliedResult: ", multipliedResult);
  return multipliedResult;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addTo(event){
  let addedResult = Number(x.value) + Number(y.value);
  console.log("addedResult: ", addedResult);
  return addedResult;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtractFrom(event){
  let subtractedResult = x.value - y.value;
  console.log("subtractedResult: ", subtractedResult);
  return subtractedResult;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideBy(event){
  let dividedResult = x.value / y.value;
  console.log("dividedResult: ", dividedResult); 
  return dividedResult;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function calculation(whichOne){
      answer.innerHTML = whichOne();
}


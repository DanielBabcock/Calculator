console.log("calculator.js: ", calculator.js);

// **********************
// *    Planning Notes:      *
// ----a keyup listener fires: 
// alert("numbers only jerk") if(keycode is not === #s0-9 || keycode 13)
// calulation functions if (keycode === 13),
//  ----when buttons are clicked
// number entry clears from textarea for next entry and return old entry
// for challenge against the old one.
// 
// **********************

// **********************
// *    Get elements:      *
// **********************
let problem = document.getElementById("entryData");
let multipling = document.getElementById("multiply");
let dividing = document.getElementById("divide");
let adding = document.getElementById("add");
let subtracting = document.getElementById("subtract");
let answer = document.getElementById("answerArea");
// **********************
// *    Add listeners:      *
// **********************
problem.addEventListener("keyup", calculateIt);
multipling.addEventListener("click", multiplyBy);
dividing.addEventListener("click", divideby);
adding.addEventListener("click", addTo);
subtracting.addEventListener("", subtractFrom);


// **********************
// *    Declare funtions:      *
// **********************
// ***write function to identify if keyup keycode is other than #s0-9 || 13

// ****
// function calculateIt(event){
//      if(event.keyCode === 13){
//          myText.value = "";      
//      }
// identifies if keycode 13 is keyup and fires list of 
// calculation functions
// }

// ****function that lists other functions:

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
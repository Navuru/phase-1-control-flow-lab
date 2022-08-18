// const { expect } = require("chai");

let ride;

// function freeSample(){
//   const scuberGreetingForFeet (){
//     if (ride <= 400);
//     return ("This one is on me!")
//   }
// }
function scuberGreetingForFeet (ride){
  if (ride <= 400){
    return ("This one is on me!");
  }else if (ride > 2000 && ride <= 2500){
    return ("I will gladly take your thirty bucks.")
  }
  else if (ride > 2500){
    return ("No can do.")
  }
  
}
let city;
function ternaryCheckCity(city) {
  return (city === "NYC" ? "Ok, sounds good." :"No go.");
}


function switchOnCharmFromTip(state) {
  switch (state) {
    case  "generous":
    return ("Thank you so much.");
  
    case  "not as generous":
    return ("Thank you.");
  
    default:
      return ("Bye.")
         
  }
}


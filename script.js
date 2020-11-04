// Callbacks exercise 1

const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  let pushPull = push || pull
  pushPull(push) 
  pushPull(pull)
// ===========================================


//   Exercise 4 - Arrow Functions
let sum = (one, two, three) =>
sum = one + two + three

console.log(sum(1, 2, 3))




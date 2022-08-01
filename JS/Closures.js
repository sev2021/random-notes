/* https://medium.com/swlh/javascript-closures-and-react-4c0e3f705a6c */
function createCounter() {
  let i = 0; 
  function increment(){i++;}
  function getCounterValue(){return i;}
  return {increment, getCounterValue}
}

/* HOW TO USE IT:

const a= createCounter();
a.getCounterValue() // returns 0
a.increment()
a.increment()
a.getCounterValue() // returns 2

*/

/*
Closure-function can access parent variable even if parent in closed!
Closure-function is made by: return {<function_name>}
*/

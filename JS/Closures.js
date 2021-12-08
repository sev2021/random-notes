/* https://medium.com/swlh/javascript-closures-and-react-4c0e3f705a6c */
function createCounter() {
  let i = 0; 
  function increment(){i++;}
  function getCounterValue(){return i;}
  return {increment, getCounterValue} /* return {<function_name>} makes Closure-function */
}

/* 
const a= createCounter();
a.getCounterValue() //0
a.increment()
a.increment()
a.getCounterValue() //2
*/

/*
Closure-function can access parent variable even if parent in closed!
Closure-function is made by: return {<function_name>}
*/

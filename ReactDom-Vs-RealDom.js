ReactDom or Virtual Dom - ReactDom interface to Web 

RealDom - What are User See

if in React any components are update than ReactDom compaire to old dom data if data are updated than Real dom are updated 
EX.
let obj1={}; // it is Real dom 

let obj2={}; // copy of real dom called Virtual Dom
console.log(obj1===bj2)  //  Both are not equal 
//false

obj2 = obj1; // if update  Components and compare to old components 
 
console.log(obj1===obj2)
true // Rendring happend 

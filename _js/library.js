//Demo JavaScript in Head
function myFunctionParagraph() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

//Functions Can Be Used as Values
function myFunction(a, b) {
  return a * b;
}
let x = myFunction(4, 3);
document.getElementById("FunctionCanBeUsedAsValues").innerHTML = x;

//Functions are Objects
function myFunction(a, b) {
  return a * b;
}
document.getElementById("FunctionsAreObjects").innerHTML = myFunction.toString();

//JavaScript Arrow Functions
const a = (x, y) => { return x * y };
document.getElementById("JavaScriptArrowFunctions").innerHTML = a(5, 5);
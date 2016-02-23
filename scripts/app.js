
function addClickListener (element, i)
{
  element.addEventListener ('click',function(event)
{

if (element.id =="basic-calc") {

  var num1 = parseFloat(document.getElementById("basic-num-1").value);
  var num2 = parseFloat(document.getElementById("basic-num-2").value);
  var operation = document.getElementById("basic-operation").value;

  function evaluate()
  {
         if(operation == "+")
           {
             var total = num1 + num2;
             document.getElementById("basic-answer-alert").innerText = total;
            }
          else if (operation == "-")
        {
          var total = num1 - num2;
         document.getElementById("basic-answer-alert").innerText = total;
        }

        else if (operation == "*") {
               var total = num1 * num2;
               document.getElementById("basic-answer-alert").innerText= total;
        }
             else {
        var total = num1 / num2
        document.getElementById("basic-answer-alert").innerText = total
      }

  }

 console.log (evaluate());

}


if (element.id =="trip-calc") {

var distance = parseFloat(document.getElementById("trip-distance").value);
var mpg = parseFloat(document.getElementById("trip-mpg").value);
var cost = parseFloat(document.getElementById("trip-cost").value);
var speed = parseFloat(document.getElementById("trip-speed").value);

function less60() {
    return distance / (mpg * cost)
}
console.log (less60());

function more60() {
   return distance / (mpg - (speed - 60) * 2) * cost
}

console.log (more60());


if (speed > 60) {
  more60()
  document.getElementById("trip-answer-alert").innerHTML = more60()
}

else {
  less60()
  document.getElementById("trip-answer-alert").innerHTML = less60()
}

}

if (element.id =="bmi-calc") {

function bmi () {
  var weight = parseFloat(document.getElementById("bmi-mass").value);
  var height = parseFloat(document.getElementById("bmi-height").value);

  return ((weight * 2.2) / ((height * 39.37) * (height * 39.37))) * 703
}

document.getElementById("bmi-answer-alert").innerHTML = bmi().toFixed(2);

}

if (element.id =="mortgage-calc") {

function mortgage () {
var loan = parseFloat(document.getElementById("mortgage-loan").value)
var apr = parseFloat(document.getElementById("mortgage-apr").value)
var term = parseFloat(document.getElementById("mortgage-term").value)

// apr must be in % and ^ means power of
// return (loan * apr * ((1+apr)^term) / (((1+apr)^term)-1))

return loan * apr/100 * Math.pow((1+(apr/100)/12), term) / ( Math.pow((1+(apr/100)/12), term) - 1)/12;

}

document.getElementById("mortgage-answer-alert").innerHTML = mortgage().toFixed(2);

}

}, false);

}



function init() {

alert("JS loaded");

elements = document.getElementsByTagName("button");
alert (elements.length + "elements found");

for (i =0; i<elements.length; i ++)
{
  addClickListener(elements[i], i);
}

}

window.addEventListener("load",init, false);

//Assignment (Mathematical Shapes) "Circumference and Surface Area"
function findResult() {
let radius = 4;
let circumference = (2 * Math.PI * radius).toFixed(2);
let surfaceArea = (Math.PI * radius * radius).toFixed(2);
document.getElementById("output").innerHTML = (`The circumference of the circle is ${circumference} and its surface area is ${surfaceArea}`);
}
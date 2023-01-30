//Assignment (Mathematical Shapes) "diagonal"
function findResult() {
    let sideLength = 9;
    let diagonal = Math.sqrt(sideLength * sideLength + sideLength * sideLength).toFixed(2);
    document.getElementById("output").innerHTML = (`The diagonal of the square is ${diagonal}`);
}

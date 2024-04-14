//Q58// This programme calculate the average  of all score given
function average(scores) {
    var total = 0;
    scores.forEach(function (score) { return total += score; });
    return total / scores.length;
}
// example finding the average of four scores
var scores = [90, 98, 89, 86, 94];
console.log(average(scores));

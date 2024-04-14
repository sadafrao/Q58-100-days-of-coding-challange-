//Q58// This programme calculate the average  of all score given
function average(scores: number[]): number {
    let total: number = 0;
    scores.forEach(score => total += score);
    return total / scores.length;
}
// example finding the average of four scores
let scores: number[] = [90, 98, 89,  86, 94];
console.log(average(scores));
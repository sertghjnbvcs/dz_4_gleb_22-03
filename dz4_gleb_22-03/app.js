var tegs = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var numberOfTegs = {}
for (var teg of tegs) {
    if (numberOfTegs[teg] === undefined) {
        numberOfTegs[teg] = 1;
    } else {
        numberOfTegs[teg]++;
    }
}
console.log(numberOfTegs);
console.log(Object.keys(numberOfTegs).sort((a, b) => numberOfTegs[b] - numberOfTegs[a]))



function getMax(numArray){
    var maxNumber = Math.max.apply(null, numArray)
    console.log(maxNumber)
}
getMax([5,7,8,9,52,67,11,15,105,10,13,20])

var a = [3, 4, 5];
//[5 4 6][10 11 9]
//[4 2 5 7 ][14 16 13 11]
var sum = 0;
var n = [];
for (let num of a) {
    sum = sum + num;
}
for(let num of a)
{
    n.push(sum-num);
}
    console.log(n);
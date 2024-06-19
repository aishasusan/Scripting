var a = [10, 11, 12, 13, 14, 15, 16];
var o=[],e=[];
for(let num of a)
{
    if (num%2==0)
    {
        e.push(num);
    }
    else
    {
        o.push(num);
    }
}
console.log("even array");
for(let num of e)
{
    console.log(num);
}
console.log("odd array");
for(let num of o)
{
    console.log(num);
}
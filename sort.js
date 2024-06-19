//p2
//a1=[10,11,12,13,14]
//p1
//a2=[8,9,10,11,16]
//case1 a[p1]==b[p2] common
//case2 10>8 p2+=1
//????????
var a=[10,11,12,13,14];
var b=[10,11,15,17,19];

for(let i=0;i<a.length;i++)
{
    for(let j=0;j<b.length;j++)
    {
        if(a[i]==a[j])
        {
            console.log(a[j]);
            break;
        }
    }
}
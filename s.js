var a1=[10,11,12,13,14]
var a2=[8,9,10,11,12,13]
var p1=0,p2=0;
while((p1<a1.length)&(p2<a2.length))
{
    if(a1[p1]==a2[p2])
    {
        console.log(a1[p1]);
        p1++;
    }
    else if(a1[p1]>a2[p2])
    {
        p2++;
    }
    else{
        p1++;
    }
}
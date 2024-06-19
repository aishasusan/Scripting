var a=[1,2,3,3,4,5];
var num=6;
var l=0;
var u=a.length-1;
while(l<u)
{
    let sum=a[l]+a[u];
    if(sum==num)
    {
        console.log(a[l],a[u]);
        l++;
    }
    else if(sum<num)
    {
        l+=1;
    }
    else
    {        
        u-=1;

    }
}
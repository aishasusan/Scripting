var a=[1,2,3,4];//num=6 [2,4] num=7 [3,4]
var num =5;

for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]+a[j]==num)
        {
            console.log(a[i]+" "+a[j]);
            break;
        }

    }
}

//case1: total==6
//case2:t<6 low+1
//case 3:t>6 u-1


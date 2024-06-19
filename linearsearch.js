var a=[1,2,5,3,4,8];
a.sort((o1, o2) => o1 - o2);
var item =9;
var flag=0;
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(item==a[i])
        {
            flag=1;
            break;
        }
    }
}

if (flag == 0) {
    console.log("item not found");
}
else 
{
    console.log("item is found");
}
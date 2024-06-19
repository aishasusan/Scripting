//m=l+u/2 
//c1:item>a[m] , l=m+1
//m=l+u/2
//c2; item<a[m] , u=m-1
//c3:item==a[m]

var a = [1, 2, 3, 4, 5, 6];
a.sort((o1, o2) => o1 - o2);
var flag = 0;
var l = 0; u = a.length - 1;
var item = 4;

while (l <= u) {
    let m = Math.floor((l + u) / 2);
    if (item > a[m]) {
        l = m + 1;
    }
    else if (item < a[m]) {
        u = m - 1;
    }
    else if (item == a[m])
        {
        flag = 1;
        break;
    }
}
if (flag == 0) {
    console.log("item not found");
}
else 
{
    console.log("item is found");
}
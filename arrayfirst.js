var data=[10,30,20,5,true,22];
data[1]=500;
//.push method in array to add a value at array end
//when num is given boolean is being printed why???
//consecutive memry location
//.length method to know array length
data.push(50)
for(let num of data)
{
    console.log(num);
}
//array iteration methods
for(let i=0;i<data.length;i++)
{
    console.log(data[i]);
}
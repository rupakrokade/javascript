function mySum(arr)
{
    var i=0;
    var sum=0;
    while(i<arr.length)
    {
        sum=sum+arr[i];
        i=i+1;
    }
    return sum;
}

console.log(mySum([1,2,3,4]))
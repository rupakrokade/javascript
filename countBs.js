var countBs = function(str,cmp)
{
    var i=0;
    var count=0;
    while(i<=str.length)
    {
        if(str[i]==cmp)
            count=count+1;

        i=i+1;
    }
    return count;
}

console.log(countBs("ABCC","B"));
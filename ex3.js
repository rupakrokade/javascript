var row = 5;
var col = 5;
var str1 = "";
var sw = true;

for (i=1;i<=row;i++)
{
    if ((i%2)==0)
        sw=false;
    else
        sw=true;

    for (j=1;j<=col;j++)
    {
        //console.log(sw);
        if(sw)
        {
            if((j%2)==0)
                str1=str1+"#";
            else
                str1=str1+" ";
        }
        else
        {
            if((j%2)==0)
                str1=str1+" ";
            else
                str1=str1+"#";
        }

    }
    str1=str1+"\n";
}
console.log(str1);


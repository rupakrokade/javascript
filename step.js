function plot(time,temp){
    var op =document.getElementById("output")
    var tim =document.getElementById("time")
    //op.innerHTML = temp;
    TESTER = document.getElementById('tester');

    Plotly.purge(TESTER)
    Plotly.plot( TESTER, [{
        x: time,
        y: temp }], {
        margin: { t: 0 } } );
    }


//////####### MAIN ###########////////////
function call(){
var heat = document.getElementById("heat").value;

temp = [];
time =[];
    for(i=0;i<100;i=i+0.5)
    {
        y=1*(1-Math.exp(-i/10))*heat;
        temp[i]=y;
        time[i]=i;
    }
    
    plot(time,temp)

}


//console.log(step());

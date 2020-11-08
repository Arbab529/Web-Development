
count =0;
function  counter()
{
    count++;
    document.getElementById('count').innerHTML=count;
    document.getElementById('count').style.color="Green";
    document.getElementById('positive').style.backgroundColor="Green";   
    document.getElementById('reset').style.backgroundColor="white";   
    document.getElementById('negative').style.backgroundColor="white";
    
}
function  Reset()
{
    count=0;
    document.getElementById('count').innerHTML=count;
    document.getElementById('count').style.color="skyBlue";
    document.getElementById('positive').style.backgroundColor="white";   
    document.getElementById('reset').style.backgroundColor="skyBlue";   
    document.getElementById('negative').style.backgroundColor="white";
}
function  Decrease()
{
    count--;
    document.getElementById('count').innerHTML=count;
    document.getElementById('count').style.color="Red";
    document.getElementById('positive').style.backgroundColor="white";   
    document.getElementById('reset').style.backgroundColor="white";   
    document.getElementById('negative').style.backgroundColor="Red";
}
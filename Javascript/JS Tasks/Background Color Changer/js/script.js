var x,y,z,color;

function newColor(){
    x = Math.round(Math.random()*256);
    y = Math.round(Math.random()*256);
    z = Math.round(Math.random()*256);
    color="rgb("+x + ", "+y+ ", "+z+")";
    document.getElementById('bgCol').style.backgroundColor=color;
    document.getElementById('color-code').innerHTML=color;
}
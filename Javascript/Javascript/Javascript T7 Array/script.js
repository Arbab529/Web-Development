var array1 = new Array('Arbab','Arain','Anjum','Chaudhry');

for (var i=0;i<array1.length;i++) 
{
    document.write("At Index "+ i+ " " + array1[i] +" Characters = " +array1[i].length+ "<br>" );
    document.write("Index of "+array1[i]+ " is "+array1.indexOf(array1[i])+"<br>");
    document.write("<br>");
    // document.write(Math.random(randomno)+1 + "<br>");
}
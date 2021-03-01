function GenerateTable()
{	var result="";
	 number = parseInt(document.getElementById("tableof").value);
	for (var i=1;i<=10;i++) 
	{
	    // document.write(number + " x "+ i + " = " + (number*i)+"<br>");
	    result = result + (number + " x "+ i + " = " + (number*i)+"<br>");
	  
	} 
	document.getElementById("print").innerHTML=result;
}


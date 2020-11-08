function ValidateForm(){
	for (var i =0 ; i<myform.elements.length;i++) 
	{
		if (myform.elements[i].className=="req" && myform.elements[i].value.length==0) 
		{
			alert("Please Fill The required Filed");
			return false;
		}

	}
	var email = document.getElementByID('email').value;
	var atpos = email.indexOf('@');
	var dotpos = email.lastindexOf('.');
	if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length) 
	{
		alert("Please Enter vaid Email address");
	}
}
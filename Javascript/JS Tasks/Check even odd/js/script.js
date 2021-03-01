function  isEven()
{
    var inputNumber = parseInt(document.getElementById("Number").value);
    if(inputNumber%2==0)
    {
        document.getElementById('Result').innerHTML="Number is EVEN !!!!";
        document.getElementById('Result').style.color="Green";
        document.getElementById('Result').style.fontSize="20px";
    }
    else
    {
        document.getElementById('Result').innerHTML="Number is ODD !!!!";
        document.getElementById('Result').style.color="Red";
        document.getElementById('Result').style.fontSize="20px";
    }

}
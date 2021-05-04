function formValidation() {

    //Email Validation Note: It can also Be validated using (required) attribute in html
    var username = document.getElementById('username').value;
    if (username == "") {
        document.getElementById('emailerror').innerHTML = " *Please Enter Email";
    }
    else if (username.indexOf('@') <= 0) {
        document.getElementById('emailerror').innerHTML = " *Incorrect Email Format";
    }
    else if (username.charAt(username.length - 4) != '.' && username.charAt(username.length - 3) != '.') {
        document.getElementById('emailerror').innerHTML = " *Invalid e.g; abc@gmail.com";
    }
    else {
        document.getElementById('emailerror').innerHTML = " ";
    }

    // Password Validation
    var upper = /[A-Z]/;
    var lower = /[a-z]/;
    var number = /[0-9]/;
    // var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,25}$/;
    var password = document.getElementById('newpassword').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    if (password == "") {
        document.getElementById('Passworderror').innerHTML = " *Please Enter Password";
    }
    else if (!password.match(upper)) {
        document.getElementById('Passworderror').innerHTML = " *Password Must Contain Uppercase, Lowercase and number";
    } else if (!password.match(lower)) {
        document.getElementById('Passworderror').innerHTML = " *Password Must Contain Uppercase, Lowercase and number";
    } else if (!password.match(number)) {
        document.getElementById('Passworderror').innerHTML = " *Password Must Contain Uppercase, Lowercase and number";
    }
    else if (password.length < 6 || password.length > 25) {
        document.getElementById('Passworderror').innerHTML = " *Password range must be 6-25 digits only";
    }
    else if (confirmpassword != password && confirmpassword == "") {
        document.getElementById('confirmpassworderror').innerHTML = " *Password Not Matched";
    }
    else {
        document.getElementById('Passworderror').innerHTML = " ";
        document.getElementById('confirmpassworderror').innerHTML = " ";
    }

}
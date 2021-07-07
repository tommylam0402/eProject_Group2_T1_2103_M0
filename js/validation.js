/*validate login*/


var uname = document.forms['login']['uname'];
var password = document.forms['login']['pass'];

var uname_error = document.getElementById('username_error');
var pass_error = document.getElementById('password_error');

uname.addEventListener('textInput',uname_Verify);
pass.addEventListener('textInput',pass_Verify)

        function validatedLogin()
        {
            if(uname.value.length <6)
            {
                uname.style.border = "1px solid red";
                uname_error.style.display= "block";
                uname.focus();
                return false;
            }
            if(password.value.length <6)
            {
                password.style.border = '1px solid red';
                pass_error.style.display='block';
                password.focus();
                return false;
            }
            else
            {
                alert("Login Success! Welcome to homepage")
                return true;
            }
        }
        function uname_Verify(){
            if(uname.value.length >=5)
            {
                uname.style.border = "1px solid silver";
                uname_error.style.display= "none";
                return true;
            }
        }
            
        function pass_Verify(){
            if(uname.value.length >=5)
            {
                password.style.border = "1px solid silver";
                pass_error.style.display= "none";
                return true;
            }
}


var username = document.forms['register']['username'];
var passwordRe = document.forms['register']['passwordRe'];
var passwordMa = document.forms['register']['passwordMatching'];



var usernameR_error = document.getElementById('usernameR_error')
var passwordR_error = document.getElementById('passwordR_error');
var password_error_matching = document.getElementById('password_error_matching')
var email_error = document.getElementById('email_error');


username.addEventListener('textInput',username_Verify);
passwordRe.addEventListener('textInput',passRe_Verify);
passwordMa.addEventListener('textInput',passMa_Verify);


        function validateRegister()
        {
            if(username.value.length <6 || username.value == "")
            {
                username.style.border = "1px solid red";
                usernameR_error.style.display= "block";
                username.focus();
                return false;
            }
            if(passwordRe.value.length <6 || passwordRe.value == "")
            {
                passwordRe.style.border = "1px solid red";
                passwordR_error.style.display= "block";
                passwordRe.focus();
                return false;
            }
            if(passwordMa.value != passwordRe.value || passwordMa.value == "")
            {
                passwordMa.style.border = "1px solid red";
                password_error_matching.style.display= "block";
                passwordMa.focus();
                return false;
            }

            else
            {
                alert("Register Success! Please login to homepage")
                return true;
            }
        }

        function username_Verify(){
            if(username.value.length >=5)
            {
                username.style.border = "1px solid silver";
                usernameR_error.style.display= "none";
                return true;
            }
        }
            
        function passRe_Verify(){
            if(passwordRe.value.length >=5)
            {
                passwordRe.style.border = "1px solid silver";
                passwordR_error.style.display= "none";
                return true;
            }
        }
        function passMa_Verify(){
            if(passwordMa.value == passwordRe.value || passwordMa.value != "")
            {
                passwordMa.style.border = "1px solid silver";
                password_error_matching.style.display= "none";
                return true;
            }
        }



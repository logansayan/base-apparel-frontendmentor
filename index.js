const email = document.getElementById("content__email--input")
const errorLogo = document.getElementById("content__email--error-logo")
const errorText = document.getElementById("contact__email--error-text")

function validateEmail(){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email.value) == false) 
  {
      // alert('Invalid Email Address');
      errorLogo.style.visibility = "visible";
      errorText.style.visibility = "visible"
      email.style.border = "1px solid hsl(0, 93%, 68%)"
      return false;
  }

  errorLogo.style.display = "none"
  return true;
  
}
	//Validtion Code For Inputs//
	var Username = document.forms["form"]["name"]
	var UserEmail = document.forms["form"]["email"]
	var unsubscribe = document.forms["form"]["unsubscribe"]


	var NameError = document.getElementById('Nameerror')
	var EmailError = document.getElementById('Emailerror')
	var unsubscribe = document.getElementById('unsubscribe')

	Username.addEventListener("Input",Name_Verify)
	UserEmail.addEventListener("Input",Email_Verify)

	unsubscribe.onclick = function(){
		alert("Do you want to unsubscribe??")
		alert("Unsubscribed successfully!")
		window.location.reload()
	}

	function validateForm() {

	  if (Username.value < 1 || Username.value =="") {
			NameError.style.display="block"
			Username.focus()
			return false
	  }
		if (UserEmail.value == "" || Username.value < 10) {
			EmailError.style.display="block"
			UserEmail.focus()
			return false
		}
	}
	function Name_Verify(){
		if(Username.value.length >= 2)
		{
			Username.style.border = "1px solid silver"
			NameError.style.display="none"
			return true
		}
	}
	function Email_Verify(){
		if(UserEmail.value.length >= 10)
		{
			UserEmail.style.border = "1px solid silver"
			EmailError.style.display="none"
			return true
		}
	}

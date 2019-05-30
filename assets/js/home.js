function submit(login = true, signup = false) {
	console.log("inside submit function")
	if (login) {
		document.getElementById('login-id').checked = true;
	}
	if (signup) {
		document.getElementById('sign-id').checked = true;
	}
	document.getElementById('log').submit();
}
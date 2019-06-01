function submit(start = true, stop = false) {
	if (start) {
		document.getElementById('start').checked = true;
	}
	if (stop) {
		document.getElementById('stop').checked = true;
	}
	document.getElementById('training-start').submit();
}
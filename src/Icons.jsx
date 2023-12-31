function getIconIndex(favicon) {
	const path = favicon.getAttribute("href");
	const regex = /[1-4]/;
	const found = path.match(regex);
	const index = found && found[0];
	return index;
}

function Icons() {
	const favicon = document.getElementById("icon");
	function changeIcon() {
		const index = getIconIndex(favicon);
		if (index) { favicon.setAttribute("href", "icons/" + (parseInt(index) % 4 + 1) + ".png"); }
	}
	let timer = null;
	function startTimer() {
		if (timer != null) {
			clearInterval(timer);
		}
		timer = setInterval(changeIcon, 1000);
	}
	startTimer();
}

export default Icons

import { useState } from 'react'

import './App.css'

function getIconIndex(favicon) {
	const path = favicon.getAttribute("href");
	const regex = /[1-4]/;
	const found = path.match(regex);
	const index = found && found[0];
	return index;
}

function App() {
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
	return (
		<header>
			<div id="site-title">
				<a href="https://amaliegay.github.io/kmle" target="_self">
					<h1>KMLE</h1>
				</a>
			</div>
		</header>
	)
}

export default App

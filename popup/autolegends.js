function listenForClicks() {
  document.addEventListener("click", (e) => {
  	function toggleButton()	{
  		alert("clicked");
  	}
  }
}

alert("running");
browser.tabs
  .executeScript({ file: "autolegends.js" })
  .then(listenForClicks);
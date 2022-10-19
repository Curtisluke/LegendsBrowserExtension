var hasLegends = document.getElementById("canontab-legends_ctlb")

var legendsURL = (hasLegends["firstElementChild"]["href"])

if(legendsURL != document.URL && hasLegends != null){
	window.location.href = legendsURL
} else {
	console.log("No Legends Page")
}
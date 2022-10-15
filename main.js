//console.log("*******************Working*******************")
var hasLegends = document.getElementById("canontab-legends_ctlb")

if( document.URL.lastIndexOf("/Legends") != -1) { 
	console.log("*******************Is Already Legends*******************")	
}
else if (hasLegends != null) {
	//console.log("*******************Has Legends and is not in it*******************")
	window.location.href = (hasLegends["firstElementChild"]["href"]);
} else {
	console.log("No Legends Page")
}
//console.log("*******************Ended*******************")
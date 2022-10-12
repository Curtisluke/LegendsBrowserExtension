//console.log(document.URL + "/Legends")
var URL = document.URL
if( URL.lastIndexOf("/Legends") == -1) { 
	console.log("*******************Is Canon*******************")
	window.location.href = (URL + "/Legends");
	console.log("*******************Is Now Legends*******************")
}
else {
	console.log("*******************Is Legends*******************")
}
function showPic (whichpic) {
	var source = whichpic.getAttribute("href")
	var placeholder = document.getElementById("placeholder")
	placeholder.setAttribute("src", source)
	var text = whichpic.getAttribute("title")
	var description = document.getElementById("description")
	description.firstChild.nodeValue = text

}

showPic

window.onload = prepareLinks
function prepareLinks() {
	var links =document.getElementsByTagName("a")
	for (var i = 0; i < links.length; i++) {
		if (links[i].getAttribute("class") == "popup") {
			popUp(this.getAttribute("href"))
			return false
		}
		
	}
}

function popUp(winURL) {
	window.open(winURL, "popup", "width=320,height=480")
}

// function countBodyChildren() {
//     var description = document.getElementById('description');
//     alert(description.lastChild.nodeValue)
// }

// window.onload = countBodyChildren;

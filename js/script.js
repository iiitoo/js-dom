
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			oldonload();
			func();
		};
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function showPic (whichpic) {
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	var text;
	if (document.getElementById("description")){
		if (whichpic.getAttribute("title")) {
			text = whichpic.getAttribute("title");
		} else {
			text = "";
		}	
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}	
	return true;
}
function showclilk() {
	return showPic(this) ? false : true;
}

function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById('imgallery')) return false;
	var gallery = document.getElementById('imgallery');
	var links = gallery.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = showclilk;
	}
}



function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById('imgallery')) return false; 
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "./images/img_0004_1.png");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("选择了的图片！");
	description.appendChild(desctext);
	document.body.appendChild(placeholder);
	document.body.appendChild(description);
	var gallery = document.getElementById('imgallery');
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
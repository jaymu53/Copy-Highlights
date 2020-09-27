document.addEventListener("mouseup", function(e) {
	if (document.getSelection() != "") {
		highlightText();
	}
});
var allSelections = ""

function highlightText() {
	var selection = window.getSelection();
	allSelections += selection;
	var range = selection.getRangeAt(0);
	var newNode = document.createElement("span");
	newNode.setAttribute("style", "background-color: yellow;");
	newNode.appendChild(range.extractContents());
	range.insertNode(newNode);
}


function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
}

document.addEventListener("keypress", function(event) {
	if (event.keyCode == 3) {
		copy(allSelections);
	}
});

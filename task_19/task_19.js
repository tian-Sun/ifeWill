function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, hanlder);
    } else {
        ele["on" + event] = hanlder;
    }
}

function leftEnter () {
	if (text.value) {
		var newItem = document.createElement("span");
		var textnode = document.createTextNode(text.value);
		newItem.appendChild(textnode);
		queue.insertBefore(newItem,queue.childNodes[0]);
	}
}
function rightEnter () {
	if (text.value) {
		queue.innerHTML += '<span>' + text.value + '</span>';
	}
}
function leftOut () {
	var num =  queue.childNodes;
	if (num.length ===0) {
		alert('没有可删除元素');
	} else {
		queue.removeChild(queue.firstChild);
	}
}
function rightOut () {
	var num =  queue.childNodes;
	if (num.length ===0) {
		alert('没有可删除元素');
	} else {
		queue.removeChild(queue.lastChild);
	}
}

var a = document.getElementById('J_leftEnter');
var b = document.getElementById('J_rightEnter');
var c = document.getElementById('J_leftOut');
var d = document.getElementById('J_rightOut');
var queue = document.getElementsByClassName('queue')[0];
var text = document.getElementsByTagName('input')[0];

addEventHandler(a, 'click', leftEnter);
addEventHandler(b, 'click', rightEnter);
addEventHandler(c, 'click', leftOut);
addEventHandler(d, 'click', rightOut);
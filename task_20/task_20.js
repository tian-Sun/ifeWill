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
        var temp = text.value;
        var content = temp.split(/\W/);
        for (var i = 0; i < content.length; i++) {
            var newItem = document.createElement("span");
            var textnode = document.createTextNode(content[i]);
            newItem.appendChild(textnode);
            queue.insertBefore(newItem,queue.childNodes[0]);
        }
    }
}
function rightEnter () {
	if (text.value) {
        var temp = text.value;
        var content = temp.split(/\W/);
        for (var i = 0; i < content.length; i++) {
            queue.innerHTML += '<span>' + content[i] + '</span>';
        }
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
function matchingQuery () {
    var content = query.value;
    var num =  queue.childNodes;
    for (var i = 0; i < num.length; i++) {
        var css = num[i].innerHTML;
        if (css.indexOf(content) !== -1) {
            num[i].style.backgroundColor = 'yellow';
        }
    }
}

var a = document.getElementById('J_leftEnter');
var b = document.getElementById('J_rightEnter');
var c = document.getElementById('J_leftOut');
var d = document.getElementById('J_rightOut');
var e = document.getElementById('J_search');
var query = document.getElementById('J_query');
var queue = document.getElementsByClassName('queue')[0];
var text = document.getElementsByTagName('textarea')[0];

addEventHandler(a, 'click', leftEnter);
addEventHandler(b, 'click', rightEnter);
addEventHandler(c, 'click', leftOut);
addEventHandler(d, 'click', rightOut);
addEventHandler(e, 'click', matchingQuery);
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
		// var textnode = document.createTextNode(text.value);
		// newItem.appendChild(textnode);
		// queue.insertBefore(newItem,queue.childNodes[0]);
        var content = text.value.toString();
        var a = content.replace(//g,'</span><span>');
        // a = content.replace(/2/g,'3');
        // a = content.replace('，','</span><span>');
        // a = content.replace('、','</span><span>');
        // a = content.replace(/\s+/g,'</span><span>');
        // a = content.replace(/[\n\r]/g,'</span><span>');
        // a = content.replace(/[\r\n]/g,'</span><span>');
        console.log(a);
        var textnode = document.createTextNode(a);
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
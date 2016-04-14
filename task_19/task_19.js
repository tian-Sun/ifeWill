function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + event, hanlder);
    } else {
        ele["on" + event] = hanlder;
    }
}

function initChart() {
	var height = queue.childNodes;
	for (var i = 0; i < height.length; i++) {
		var hs = height[i].title;
		var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
		height[i].style.height = hs + 'px';
		height[i].style.backgroundColor = color;
	}
}

function sortChart () {
	var size = document.getElementsByTagName('span');
	var titleValue = [];
	for (var i = 0; i < size.length; i++) {
		titleValue[i] = size[i].title;
	}
	var l = size.length - 1;
	for (var k = l; k > 0; k--) {
		if (parseInt(titleValue[k]) < parseInt(titleValue[k-1])) {
			var temp = size[k].title;
			size[k].title = size[k-1].title;
			size[k-1].title = temp;
			// var beginTime=new Date().getTime();
			// while(new Date().getTime()  < beginTime + 1000) {
			//    continue;
			// }
			// var t=setTimeout("console.log('1');",5000)
			// alert();
			// var ALERT_ON = true; // 可通过这个属性开关alert消息框
			// var _alert = window.alert;
			// window.alert = function(msg) {
			//     if (ALERT_ON) {
			//         _alert.hide();
			//     }
			// }
// 			var a = function test()
// {
// showModelessDialog("javascript:alert();window.close();","","status:no;resizable:no;help:no;dialogHeight:30px;dialogWidth:40px;");
// setTimeout("location.reload();",1000);

// }
		}
	}
	initChart();
	sortChart();
}

function size(num) {
	if (num >= 10 && num <100) {
		return num;
	} else {
		return false;
	}
}

function numLimit() {
	var num = queue.childNodes.length;
	if (num === 60) {
		alert('队列元素数量最多限制为60个');
		return false;
	}
	else {
		return true;
	}
}

function leftEnter () {
	if (size(text.value) && numLimit()) {
		var newItem = document.createElement("span");
		newItem.title = text.value;
		queue.insertBefore(newItem,queue.childNodes[0]);
	}
	initChart();
}
	
function rightEnter () {
	if (size(text.value) && numLimit()) {
		queue.innerHTML += '<span title="' +text.value+ '"></span>';
	}
	initChart();
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
var sortBtn = document.getElementById('J_sort');

addEventHandler(a, 'click', leftEnter);
addEventHandler(b, 'click', rightEnter);
addEventHandler(c, 'click', leftOut);
addEventHandler(d, 'click', rightOut);
addEventHandler(sortBtn, 'click', sortChart);

function init () {
	initChart();
}

init();
/*兼容*/
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

function initCharts() {
	var height = queue.childNodes;
	for (var i = 0; i < height.length; i++) {
		var hs = height[i].title;
		height[i].style.height = hs + 'px';
	}
}

function sortChart () {
	var numbers = document.getElementsByTagName('span');
	var titleValue = [];
	for (var i = 0; i < numbers.length; i++) {
		titleValue[i] = numbers[i].title;
	}
	var l = numbers.length - 1;
	for (var k = l; k > 0; k--) {
		if (parseInt(titleValue[k]) < parseInt(titleValue[k-1])) {
			var temp = numbers[k].title;
			numbers[k].title = numbers[k-1].title;
			initCharts();
			numbers[k-1].title = temp;
			console.log(k+1 + '与' + k + '换位');
			setTimeout('sortChart()',500);
		}
	}
	
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
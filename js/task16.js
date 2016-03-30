var add = document.getElementById('add-btn');
add.onclick = function bindClickEvent() {
    var result = verify();
    if (result) {
        addRow();
    };
}

function verify() {
    var result = false;
    var city = document.getElementById('aqi-city-input');
    var value = document.getElementById('aqi-value-input');
    if (city.value == '' && value.value == '') {
        alert('3');
    }
    else if (city.value == '') {
        alert('2');
    }
    else if (value.value == '') {
        alert('1');
    }
    else {
        result = true;
    }
    return result;
}

var i = 0;

function addRow() {
    var city = document.getElementById('aqi-city-input');
    var value = document.getElementById('aqi-value-input');
    var tables = document.getElementsByTagName('table')[0];
    if (i == 0) {
        tables.innerHTML = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    };
    tables.innerHTML += '<tr><td>' + city.value + '</td><td>' + value.value + '</td><td><button>删除</button></td></tr>'
    i++;
    bindDeleteEvent();
}

function bindDeleteEvent() {
    var tables = document.getElementsByTagName('table')[0];
    var btn = tables.getElementsByTagName('button');
    for (var i = 0; i < btn.length; i++) {
        btn[i].setAttribute('onclick','deletEvent(this)');
    };
}

function deletEvent(ev) {
    ev.parentNode.parentNode.remove();
}

var add = document.getElementById('add-btn');
add.onclick = function bindClickEvent() {
    var result = verify();
    if (result) {
        addRow();
    }
};

function verify() {
    var result = false;
    var city = document.getElementById('aqi-city-input');
    var value = document.getElementById('aqi-value-input');
    if (city.value == '' && value.value == '') {
        alert('请输入内容');
    }
    else if (city.value == '') {
        alert('请输入城市名称');
    }
    else if (value.value == '') {
        alert('请输入空气质量指数');
    }
    else {
        if(!value.value.match(new RegExp("^[-]{0,1}[0-9]{1,}$"))) {
            alert('输入空气质量指数应为整数');
        }
        else if(!CheckEmpName(city.value)) {
            alert('应输入中文或英文城市名称');
        }
        else {
            result = true;
        }
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
        btn[i].setAttribute('onclick','deleteEvent(this)');
    }
}

function deleteEvent(ev) {
    ev.parentNode.parentNode.remove();
}

function CheckEmpName(EmpName)
{
    var CheckTestName = "^[a-zA-Z\u4e00-\u9fa5]+$";
    var re = new RegExp(CheckTestName);
    var result = false;
    if(EmpName.length!=0)
    {
        if(re.test(EmpName))
        {
            result = true;
        }
    }
    return result;
}
// 语言切换
var lange = document.getElementById('lange').children
var la = document.getElementById('lange')
la.onmouseenter = function () {
    lange[1].style.display = ('block')
}
la.onmouseleave = function () {
    lange[1].style.display = ('none')
}

//文本框js
//div
var username = document.getElementById("name")
var pwd = document.getElementById("pwd")
//input
var user = document.getElementById("user")
var passwd = document.getElementById("passwd")
//span
var nameaa = document.getElementById("nameaa")
var pwdaa = document.getElementById("pwdaa")

var phoneaa = document.getElementById("phoneaa")
var phone = document.getElementById("phone")
var ph=document.getElementById('ph')
var coded=document.getElementById('coded')

ph.onclick=function(){
    phoneaa.innerHTML = ''
    coded.style.display='block'
    
}
phone.onblur=function(){
    if(phone.value==''){
        phoneaa.style.display='block'
        phoneaa.innerHTML='手机号不能为空'
        
    }
}

username.onclick = function () {
    nameaa.innerHTML = ''
    username.style.border = '1px #549df8 solid'
}
pwd.onclick = function () {
    pwdaa.innerHTML = ''
    pwd.style.border = '1px #549df8 solid'
}
// onblur  onfocus
user.onblur = function () {
    if (user.value == '') {
        nameaa.innerHTML = '昵称不能为空'
        nameaa.style.display='block'
        username.style.border = '1px #FF5765 solid'
    } else {
        username.style.border = '1px white solid'
    }
   
}
passwd.onblur = function () {
    if (passwd.value == '') {
        pwdaa.innerHTML = '密码不能为空'
        pwdaa.style.display='block'
        pwd.style.border = '1px #FF5765 solid'
    } else {
        pwd.style.border = '1px white solid'
    }
}


function checkPhone() {
    var regex = /^\w{11}$/;
    var value = phoneObj.value;
    var msg = "";
    if (!value)
        msg = "电话号码必须填写！";
    else if (!regex.test(value))
        msg = "电话号码不合法！";
    phoneMsg.innerHTML = msg;
    phoneObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
    return msg == "";
}

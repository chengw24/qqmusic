//下拉选框
var kt = document.getElementById('kt')
var cz = document.getElementById('cz')
var lo1 = document.getElementsByClassName('lo_2')
var lo2 = document.getElementsByClassName('lo_3')
lo1[0].onmouseenter = function () {
  kt.style.display = ('inline-block')
}
kt.onmouseleave = function () {
  kt.style.display = ('none')
}
lo1[0].onmouseleave = function () {
  kt.style.display = ('none')
}
lo2[0].onmouseenter = function () {
  cz.style.display = ('inline-block')
}
cz.onmouseleave = function () {
  cz.style.display = ('none')
}
lo2[0].onmouseleave = function () {
  cz.style.display = ('none')

}
//选项卡
var list = document.getElementById('hu').children;
for (var i = 0; i < list.length; i++) {
  //动态增加属性
  list[i].setAttribute('index', i)
  list[i].onclick = function () {
    //获取属性
    var c = this.getAttribute('index')
    for (t = 0; t < list.length; t++) {
      list[t].removeAttribute('class')
    }
    this.setAttribute('class', 'li1 one')
  }
}

//此处使用jQuery，因为刚学到需练习
$('.before').click(function () {
  // 设置滚动坐标
  // $(window).scrollTop(0)
  // 滚动带有动画 特殊修改方式
  $('html,body').animate({ 'scrollTop': 0 })
  // 检测标签距离顶部的坐标值
})
$(window).scroll(function () {
  if ($(window).scrollTop() < 200 && $(window).scrollTop() >= 0) {
    $('.before').hide();
  } else {
    $('.before').show();
  }

})
var lolo = document.getElementById("lolo")
var centered = document.getElementById("centered")
var login = document.getElementById("login")
var close = document.getElementById("close")
login.onclick = function () {
  lolo.style.display = ('block')
}
close.onclick = function () {
  lolo.style.display = ('none')
}
lolo.onclick = function (e) {
  lolo.style.display = ('none')
  e.cancelBubble = true

}
centered.onclick = function (e) {
  e.cancelBubble = true
}
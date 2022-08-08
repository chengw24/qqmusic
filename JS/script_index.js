//左右箭头出现效果
var left = document.getElementsByClassName('btn_left')
var right = document.getElementsByClassName('btn_right')
var mmlist = document.getElementsByClassName('mm')
var longwidth = document.getElementsByClassName('longwidth')

for (var i = 0; i < mmlist.length; i++) {
  mmlist[i].setAttribute('index', i)
  mmlist[i].onmouseenter = function () {
    var c = this.getAttribute('index')
    left[c].style.transform = ('translate(0%, -50%)')
    right[c].style.transform = ('translate(0%, -50%)')
  }
  mmlist[i].onmouseleave = function () {
    var c = this.getAttribute('index')
    left[c].style.transform = ('translate(-100%, -50%)')
    right[c].style.transform = ('translate(100%, -50%)')
  }
}
//点击焦点按钮
var sw = document.getElementsByClassName('switch')
var swlist = document.getElementById('sw').children
var swlist1 = document.getElementById('sw1').children
var swlist2 = document.getElementById('sw2').children
var swlist3 = document.getElementById('sw3').children
var swlist4 = document.getElementById('sw4').children
var arr = [swlist, swlist1, swlist2, swlist3, swlist4]

var nn = [0, 0, 0, 0, 0]
var c
for (var i = 0; i < sw.length; i++) {
  sw[i].setAttribute('index', i)
  sw[i].onmouseenter = function () {
    c = this.getAttribute('index')
    var lli = arr[c]
    for (var t = 0; t < lli.length; t++) {
      lli[t].setAttribute('index', t)
      lli[t].onclick = function () {
        var j = this.getAttribute("index")
        for (var y = 0; y < lli.length; y++) {
          lli[y].setAttribute('class', 'sdiv')
        }
        this.setAttribute('class', 'current-one')
        longwidth[c].style.transform = ('translate(' + -j * 1220 + 'px, 0%)')

      }
    }
  }
}

//点击箭头点击效果
for (var i = 0; i < left.length; i++) {
  left[i].setAttribute('index', i)
  left[i].onclick = function () {
    var c = this.getAttribute('index')
    var lli = arr[c]
    if (nn[c] == 0) { nn[c] = lli.length }
    nn[c]--
    for (var y = 0; y < lli.length; y++) {
      lli[y].setAttribute('class', 'sdiv')
    }
    lli[nn[c]].setAttribute('class', 'current-one')
    longwidth[c].style.transform = ('translate(' + -nn[c] * 1220 + 'px, 0%)')

  }
  right[i].setAttribute('index', i)
  right[i].onclick = function () {

    var c = this.getAttribute('index')
    nn[c]++
    var lli = arr[c]
    if (nn[c] == lli.length) { nn[c] = 0 }
    for (var y = 0; y < lli.length; y++) {
      lli[y].setAttribute('class', 'sdiv')
    }
    lli[nn[c]].setAttribute('class', 'current-one')
    longwidth[c].style.transform = ('translate(' + -nn[c] * 1220 + 'px, 0%)')
  }
}
//播放图标放大

var himg = document.getElementsByClassName('himg')
var bbb = document.getElementsByClassName('bbb')
var kimg = document.getElementsByClassName('kimg')
var play3 = document.getElementsByClassName('play3')
var cp = document.getElementsByClassName('cpdd')
for (var i = 0; i < himg.length; i++) {
  himg[i].setAttribute('index', i)
  himg[i].onmouseenter = function () {
    var te = this.getAttribute('index')
    play3[te].style.opacity = ('1')
    kimg[te].style.transform = ('scale(1.1)')
    if (te > 28) {

    } else {
      bbb[te].style.opacity = ('.2')
    }
    play3[te].style.transform = ('scale(1.3)')

  }
  himg[i].onmouseleave = function () {
    var te = this.getAttribute('index')
    play3[te].style.opacity = ('0')
    kimg[te].style.transform = ('scale(1.0)')

    if (te > 28) {
    } else {
      bbb[te].style.opacity = ('0')
    }
    play3[te].style.transform = ('scale(1.0)')

  }
}



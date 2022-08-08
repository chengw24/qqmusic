var ulul = document.getElementsByClassName('songlist')
var op = document.getElementsByClassName('opreta')
var lp = document.getElementsByClassName('lp')
var go = document.getElementById('go').children
var xh = document.getElementsByClassName('songlist_c1')

console.log(xh)
for (var i = 0; i < go.length; i++) {
  xh[i].innerHTML = i + 1
  if (i % 2 == 1) {
    go[i].style.background = ("#ffffff")
  }
}
for (var i = 0; i < ulul.length; i++) {
  ulul[i].setAttribute('index', i)
  var time
  ulul[i].onmouseenter = function () {
    var t = this.getAttribute('index')
    time = lp[t].innerHTML
    op[t].style.display = ('block')
    lp[t].innerHTML = `<div class="lop2">
    <img class="minid" src="" alt="">
    </div>`

  }
  ulul[i].onmouseleave = function () {
    var t = this.getAttribute('index')
    op[t].style.display = ('none')
    lp[t].innerHTML = time
  }
}
var lop = document.getElementsByClassName('lop')
var minid = document.getElementsByClassName('minid')

for (var i = 0; i < lop.length; i++) {
  lop[i].setAttribute('index', i)
  console.log(lop)
  lop[i].onmouseenter = function () {
    var te = this.getAttribute('index')
    if (te % 4 == 0) {
      minid[te].setAttribute('src', 'img/play2.png')
    } else if (te % 4 == 1) {
      minid[te].setAttribute('src', 'img/add3.png')
    } else if (te % 4 == 2) {
      minid[te].setAttribute('src', 'img/install2.png')
    } else if (te % 4 == 3) {
      minid[te].setAttribute('src', 'img/zf2.png')
    }
    this.style.border = ('1px #31c27c solid')
  }
  lop[i].onmouseleave = function () {
    var te = this.getAttribute('index')
    if (te % 4 == 0) {
      minid[te].setAttribute('src', 'img/play1.png')
    } else if (te % 4 == 1) {
      minid[te].setAttribute('src', 'img/add.png')
    } else if (te % 4 == 2) {
      minid[te].setAttribute('src', 'img/install.png')
    } else if (te % 4 == 3) {
      minid[te].setAttribute('src', 'img/zf.png')
    }
    this.style.border = ('1px #999 solid')

  }
}


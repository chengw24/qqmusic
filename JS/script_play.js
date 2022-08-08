var opt = document.getElementById('opt')
var jub = document.getElementById('jub')
opt.onmouseenter = function () {
  jub.style.display = ('inline')
}
opt.onmouseleave = function () {
  jub.style.display = ('none')
}
var ulul = document.getElementsByClassName('songlist')
var op = document.getElementsByClassName('opreta')
var lp = document.getElementsByClassName('lp')
var go = document.getElementById('go').children
var xh = document.getElementsByClassName('songlist_c1')

console.log(xh)
for (var i = 0; i < go.length; i++) {
  xh[i].innerHTML = i + 1

}
for (var i = 0; i < ulul.length; i++) {
  ulul[i].setAttribute('index', i)
  var time
  ulul[i].onmouseenter = function () {
    var t = this.getAttribute('index')
    time = lp[t].innerHTML
    op[t].style.display = ('block')
    lp[t].innerHTML = `<div class="lop">
    <span class="iconfont icon-shanchu"></span>
    </div>`

  }
  ulul[i].onmouseleave = function () {
    var t = this.getAttribute('index')
    op[t].style.display = ('none')
    lp[t].innerHTML = time
  }
}

var n = 0
var qrc = document.getElementById('qrc_ctn')
var list2 = document.getElementById('qrc_ctn').children
var ti
function song () {
  ti = setInterval(function () {
    for (var i = 0; i < list2.length; i++) {
      list2[i].removeAttribute('class')
    }
    list2[n + 3].setAttribute('class', 'no')
    qrc.style.transform = ('translate(0,' + n * -30 + 'px)')
    n++
  }, 5000)
}


//
var music = document.getElementById('music')
var bpzt = document.getElementById('bpzt')
var btn = document.getElementById('btn')
var befores = document.getElementById('befores')
var nexts = document.getElementById('nexts')
music.setAttribute('src', 'music/hy.mp3')
btn.onclick = function () {
  if (music.paused) {
    music.play();
    bpzt.setAttribute('src', 'img/zt.png')
    song()
  } else {
    music.pause();
    clearInterval(ti)
    bpzt.setAttribute('src', 'img/bp.png')
  }
}
befores.onclick = function () {
  music.setAttribute('src', 'music/az.mp3')
  if (music.paused) {
    music.play();
    bpzt.setAttribute('src', 'img/zt.png')

  } else {
    music.pause();
    bpzt.setAttribute('src', 'img/bp.png')
  }
}
nexts.onclick = function () {
  music.setAttribute('src', 'music/az.mp3')
  if (music.paused) {
    music.play();
    bpzt.setAttribute('src', 'img/zt.png')

  } else {
    music.pause();
    bpzt.setAttribute('src', 'img/bp.png')
  }
}

var se = document.getElementsByClassName('songlist__edit')
var sc = document.getElementsByClassName('songlist__checkbox')
for (var i = 0; i < sc.length; i++) {
  sc[i].setAttribute('index', i)
  sc[i].onclick = function () {
    var n = this.getAttribute('index')
    if (this.checked == false) {
      se[n].style.background = 'url()'
      console.log('fa')
    } else {
      se[n].style.background = 'url(./img/dg.png)'
      se[n].style.backgroundSize = '14px 14px'
      console.log(n)
    }
    for (var i = 0; i < sc.length; i++) {
      if (!sc[i].checked) {
        se[0].style.background = 'url()'
        se[0].style.backgroundSize = '14px 14px'
        break
      } else {
        se[0].style.background = 'url(./img/dg.png)'
        se[0].style.backgroundSize = '14px 14px'
      }
    }
  }
  se[0].onclick = function () {
    for (var i = 0; i < sc.length; i++) {
      // if (!sc[i].checked) {
      se[i].style.background = 'url(./img/dg.png)'
      se[i].style.backgroundSize = '14px 14px'
      sc[i].checked = true

      // } else {

      // se[i].style.background = 'url()'
      // se[i].style.backgroundSize = '14px 14px'
      // }
    }

  }
}

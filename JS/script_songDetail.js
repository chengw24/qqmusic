//评论输入
var ctd = document.getElementById("ctd")
var cti = document.getElementById("cti")

ctd.onclick = function () {
  ctd.style.display = ('none')
  cti.style.display = ('block')
  cti.focus();
}
cti.onblur = function () {
  if (cti.innerHTML == '') {
    ctd.style.display = ('block')
    cti.style.display = ('none')
  }

}

//list添加
var boxs = document.getElementById('boxs')
var send = document.getElementById('send')
send.onclick = function () {
  if (cti.innerHTML == '') {

  } else {
    var li = document.createElement('li')
    li.innerHTML = `<a href="#"><img class="tx" src="img/songDtail/140.jfif" alt=""></a>
        <div class="boxs_main" >
            <div><a href="#">爱在西元前</a><img src="" alt=""></div>
            <div class="po">7月14日 22:28  </div>
            <p class="po2">${cti.innerHTML
      }</p>
            <div class="opt">
                <a href="#">赞 27012</a>
                <a href="#">回复</a>
                <a href="#">举报</a>
            </div>
            <a href="#">查看134条回复</a>
            <div class="reply">
                <ul>
                    <li class="hhh">
                        <div class="reply_1">
                            <p><a href="#"> 囿才：</a>这首歌节奏可太舒服了，一句凤求凰更是神来之笔，加上背景的笛声，真的可以比肩千里之外这一档的中国风了</p>
                        </div>
                        <div class="ggg">
                            <a href="#">赞 785</a>
                        </div>
              
                    </li>
                </ul>
            </div>
        </div>`
    boxs.appendChild(li)
  }
}

var opt = document.getElementById('opt')
var jub = document.getElementById('jub')
opt.onmouseenter = function () {
  jub.style.display = ('inline')
}
opt.onmouseleave = function () {
  jub.style.display = ('none')
}

//收起展开
var c_tx = document.getElementById('c_tx')
var gc = document.getElementById('gcgc')
c_tx.onclick = function () {
  if (c_tx.innerHTML == '[展开]') {
    console.log(111)
    gc.removeAttribute('class')
    c_tx.innerHTML = '[收起]'
  } else {
    gc.setAttribute('class', 'la_21')
    c_tx.innerHTML = '[展开]'
  }
}


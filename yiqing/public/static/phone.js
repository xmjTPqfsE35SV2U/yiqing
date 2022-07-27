/* 移动端750px */
/* 375px--1rem=50px */
(function (doc, win) {
  var docEl, resizeEvt, recalc
  docEl = doc.documentElement
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  recalc = function () {
    // var clientWidth = docEl.clientWidth
    var clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    // console.log(docEl.style.fontSize)
    // 1rem=100px
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)


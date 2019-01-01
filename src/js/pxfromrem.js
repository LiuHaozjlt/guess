export function setRem (doc, win) {
  let docEl = doc.documentElement
  let ressize = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let reCaculate = function () {
    var cleWidth = docEl.clientWidth
    docEl.style.fontSize = 20 * (cleWidth / 640) + 'px'
  }
  win.addEventListener(ressize, reCaculate, false)
  doc.addEventListener('DOMContentLoaded', reCaculate, false)
}

!(function(e) {
  var t
  var n
  var o
  var i
  var c
  var d
  var l =
    '<svg><symbol id="icon-bold-right" viewBox="0 0 1024 1024"><path d="M261.1 971.9c30.4 31.3 79.7 31.3 110.2 0L763 568.7c30.4-31.3 30.4-82.1 0-113.4L371.3 52.1c-30.5-31.3-79.8-31.3-110.2 0-30.4 31.3-30.4 82.1 0 113.4L597.7 512 261.1 858.5c-30.5 31.3-30.5 82.1 0 113.4z"  ></path></symbol><symbol id="icon-bold-left" viewBox="0 0 1024 1024"><path d="M762.9 52.1c-30.4-31.3-79.7-31.3-110.2 0L261 455.3c-30.4 31.3-30.4 82.1 0 113.4l391.7 403.2c30.5 31.3 79.8 31.3 110.2 0 30.4-31.3 30.4-82.1 0-113.4L426.3 512l336.6-346.5c30.5-31.3 30.5-82.1 0-113.4z"  ></path></symbol></svg>'
  var s = (s = document.getElementsByTagName('script'))[s.length - 1].getAttribute(
    'data-injectcss'
  )
  if (s && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  function a() {
    c || ((c = !0), o())
  }
  (t = function() {
    var e, t, n, o;
    ((o = document.createElement('div')).innerHTML = l),
    (l = null),
    (n = o.getElementsByTagName('svg')[0]) &&
        (n.setAttribute('aria-hidden', 'true'),
        (n.style.position = 'absolute'),
        (n.style.width = 0),
        (n.style.height = 0),
        (n.style.overflow = 'hidden'),
        (e = n),
        (t = document.body).firstChild
          ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n))
          : t.appendChild(e))
  }),
  document.addEventListener
    ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
      ? setTimeout(t, 0)
      : ((n = function() {
        document.removeEventListener('DOMContentLoaded', n, !1), t()
      }),
      document.addEventListener('DOMContentLoaded', n, !1))
    : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        (d = function() {
          try {
            i.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(d, 50)
          }
          a()
        })(),
        (i.onreadystatechange = function() {
          i.readyState == 'complete' && ((i.onreadystatechange = null), a())
        }))
})(window)

(function (e) {
  function t (t) {
    for (var n, i, c = t[0], s = t[1], u = t[2], l = 0, p = []; l < c.length; l++) i = c[l], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
    f && f(t)
    while (p.length) p.shift()()
    return a.push.apply(a, u || []), r()
  }

  function r () {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, i = 1; i < r.length; i++) {
        var s = r[i]
        0 !== o[s] && (n = !1)
      }
      n && (a.splice(t--, 1), e = c(c.s = r[0]))
    }
    return e
  }

  var n = {}, o = { app: 0 }, a = []

  function i (e) {
    return c.p + 'js/' + ({ about: 'about' }[e] || e) + '.' + { about: '9b052641' }[e] + '.js'
  }

  function c (t) {
    if (n[t]) return n[t].exports
    var r = n[t] = { i: t, l: !1, exports: {} }
    return e[t].call(r.exports, r, r.exports, c), r.l = !0, r.exports
  }

  c.e = function (e) {
    var t = [], r = o[e]
    if (0 !== r) {
      if (r) {
        t.push(r[2])
      } else {
        var n = new Promise((function (t, n) {
          r = o[e] = [t, n]
        }))
        t.push(r[2] = n)
        var a, s = document.createElement('script')
        s.charset = 'utf-8', s.timeout = 120, c.nc && s.setAttribute('nonce', c.nc), s.src = i(e)
        var u = new Error
        a = function (t) {
          s.onerror = s.onload = null, clearTimeout(l)
          var r = o[e]
          if (0 !== r) {
            if (r) {
              var n = t && ('load' === t.type ? 'missing' : t.type), a = t && t.target && t.target.src
              u.message = 'Loading chunk ' + e + ' failed.\n(' + n + ': ' + a + ')', u.name = 'ChunkLoadError', u.type = n, u.request = a, r[1](u)
            }
            o[e] = void 0
          }
        }
        var l = setTimeout((function () {
          a({ type: 'timeout', target: s })
        }), 12e4)
        s.onerror = s.onload = a, document.head.appendChild(s)
      }
    }
    return Promise.all(t)
  }, c.m = e, c.c = n, c.d = function (e, t, r) {
    c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
  }, c.r = function (e) {
    'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e
    if (4 & t && 'object' === typeof e && e && e.__esModule) return e
    var r = Object.create(null)
    if (c.r(r), Object.defineProperty(r, 'default', {
      enumerable: !0,
      value: e
    }), 2 & t && 'string' != typeof e) {
      for (var n in e) {
        c.d(r, n, function (t) {
          return e[t]
        }.bind(null, n))
      }
    }
    return r
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e['default']
    } : function () {
      return e
    }
    return c.d(t, 'a', t), t
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, c.p = 'static/', c.oe = function (e) {
    throw console.error(e), e
  }
  var s = window['webpackJsonp'] = window['webpackJsonp'] || [], u = s.push.bind(s)
  s.push = t, s = s.slice()
  for (var l = 0; l < s.length; l++) t(s[l])
  var f = u
  a.push([0, 'chunk-vendors']), r()
})({
  0: function (e, t, r) {
    e.exports = r('cd49')
  }, '066e': function (e, t, r) {
    'use strict'
    var n = r('7d61'), o = r.n(n)
    o.a
  }, 3833: function (e, t, r) {
  }, '437b': function (e, t, r) {
  }, 5475: function (e, t, r) {
    'use strict'
    var n = r('3833'), o = r.n(n)
    o.a
  }, '7d61': function (e, t, r) {
  }, c8de: function (e, t, r) {
    'use strict'
    var n = r('437b'), o = r.n(n)
    o.a
  }, cd49: function (e, t, r) {
    'use strict'
    r.r(t)
    r('e260'), r('e6cf'), r('cca6'), r('a79d')
    var n = r('2b0e'), o = function () {
        var e = this, t = e.$createElement, r = e._self._c || t
        return r('div', { attrs: { id: 'app' } }, [r('router-view')], 1)
      }, a = [], i = (r('a4d3'), r('4de4'), r('4160'), r('e439'), r('dbb4'), r('b64b'), r('159b'), r('2fa7')),
      c = r('2f62')

    function s (e, t) {
      var r = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, n)
      }
      return r
    }

    function u (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {}
        t % 2 ? s(r, !0).forEach((function (t) {
          Object(i['a'])(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    var l = {
        name: 'App', computed: u({}, Object(c['b'])(['githubUsername', 'htmlTitle'])), created: function () {
          this.$store.dispatch('Init')
        }
      }, f = l, p = (r('c8de'), r('2877')), m = Object(p['a'])(f, o, a, !1, null, null, null), b = m.exports,
      d = (r('d3b7'), r('8c4f')), h = function () {
        var e = this, t = e.$createElement, r = e._self._c || t
        return r('div', [r('Content'), r('Menu')], 1)
      }, v = [], g = function () {
        var e = this, t = e.$createElement, r = e._self._c || t
        return r('div', { staticClass: 'body' }, [e._m(0), r('hr'), r('div', { staticClass: 'front' }, [r('section', [e._m(1), r('MavonEditor'), e._v(' OOOOOOOOOOO' + e._s(e.token) + 'OOOOOOOOO1111 ')], 1)])])
      }, O = [function () {
        var e = this, t = e.$createElement, r = e._self._c || t
        return r('div', { staticClass: 'header' }, [r('h1', [e._v('Weblogs')])])
      }, function () {
        var e = this, t = e.$createElement, r = e._self._c || t
        return r('article', [r('header', [r('h2', [r('a', { attrs: { href: '//pvdz.ee/weblog/428' } }, [e._v('Pack token types in 32bit')])]), r('div', { staticClass: 'time front' }, [e._v('2019-09-29')])]), r('section', [r('p', { staticClass: 'front' }, [e._v(' I\'ve been writing a JS parser for over two years now. In this particular post I want to highlight a bit packing trick I\'m applying to a core data structure of the parser as a whole: the token type. In general, the way a parser works is that it doe... ')])]), r('br')])
      }], y = function () {
        var e = this, t = e.$createElement, r = e._self._c || t
        return r('div', [e._v(' ~~~~~' + e._s(e.doc) + '~22222~~~ '), r('mavon-editor', {
          ref: 'md',
          staticStyle: { 'max-height': '500px' },
          on: { imgAdd: e.imgAdd },
          model: {
            value: e.doc, callback: function (t) {
              e.doc = t
            }, expression: 'doc'
          }
        })], 1)
      }, w = [], k = r('b2d8'), j = (r('64e1'), {
        name: 'Create', components: { mavonEditor: k['mavonEditor'] }, data: function () {
          return { doc: '' }
        }, methods: {
          imgAdd: function (e, t) {
            this.$refs.md.$img2Url(e, t.miniurl)
          }
        }
      }), _ = j, P = Object(p['a'])(_, y, w, !1, null, null, null), T = P.exports, E = void 0

    function S (e, t) {
      var r = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, n)
      }
      return r
    }

    function $ (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {}
        t % 2 ? S(r, !0).forEach((function (t) {
          Object(i['a'])(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(r).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    var C = {
      name: 'Content', components: { MavonEditor: T }, data: function () {
        return { value: '' }
      }, methods: {
        toWrite: function () {
          this.$router.push({ path: '/write' })
        }, toWrite1: function () {
          var e = E
          e.$router.push({ path: '/write' })
        }, toRead: function () {
        }
      }, computed: $({}, Object(c['b'])(['token']))
    }, x = C, D = (r('5475'), Object(p['a'])(x, g, O, !1, null, null, null)), U = D.exports, I = function () {
      var e = this, t = e.$createElement, r = e._self._c || t
      return r('div', { staticClass: 'menu' }, [e._m(0), r('br'), e._m(1), e.token ? e._e() : r('ul', { staticClass: 'my' }, [r('li', [r('a', { on: { click: e.insertToken } }, [e._v('Authenticate')])])]), e.token ? r('ul', { staticClass: 'my' }, [e._m(2), e._m(3)]) : e._e(), r('token-dialog', { ref: 'tokenDialog' })], 1)
    }, M = [function () {
      var e = this, t = e.$createElement, r = e._self._c || t
      return r('ul', { staticClass: 'quick' }, [r('li', [r('a', { attrs: { href: '//pvdz.ee/weblog' } }, [e._v('Weblog')])]), r('li', [r('a', { attrs: { href: '//pvdz.ee/notes' } }, [e._v('Notes')])]), r('li', [r('a', { attrs: { href: '//pvdz.ee/projects' } }, [e._v('Projects')])]), r('li', [r('a', { attrs: { href: '//pvdz.ee/about' } }, [e._v('About')])])])
    }, function () {
      var e = this, t = e.$createElement, r = e._self._c || t
      return r('ul', [r('li', [r('a', { attrs: { href: '//pvdz.ee/weblog/428' } }, [e._v('Pack token types in 32bit')])]), r('li', [r('a', { attrs: { href: '//pvdz.ee/weblog/426' } }, [e._v('Xcode my js1k demo')])])])
    }, function () {
      var e = this, t = e.$createElement, r = e._self._c || t
      return r('li', [r('a', { attrs: { href: '//pvdz.ee/weblog/428' } }, [e._v('My Home')])])
    }, function () {
      var e = this, t = e.$createElement, r = e._self._c || t
      return r('li', [r('a', { attrs: { href: '//pvdz.ee/weblog/426' } }, [e._v('Write Something')])])
    }], A = function () {
      var e = this, t = e.$createElement, r = e._self._c || t
      return r('div', [r('el-dialog', {
        attrs: { title: '绑定Token', visible: e.show, width: '500px' },
        on: {
          'update:visible': function (t) {
            e.show = t
          }
        }
      }, [r('el-form', {
        ref: 'tokenForm',
        attrs: { model: e.tokenForm, 'label-width': '100px' }
      }, [r('el-form-item', { attrs: { label: 'GitHub' } }, [r('el-tag', [e._v(e._s(e.githubUsername))])], 1), r('el-form-item', {
        attrs: {
          prop: 'token',
          label: 'Token',
          rules: [{ required: !0, message: '请输入accessToken', trigger: 'blur' }]
        }
      }, [r('el-input', {
        attrs: { placeholder: '请保管好Token' },
        model: {
          value: e.tokenForm.token, callback: function (t) {
            e.$set(e.tokenForm, 'token', t)
          }, expression: 'tokenForm.token'
        }
      })], 1)], 1), r('span', {
        staticClass: 'dialog-footer',
        attrs: { slot: 'footer' },
        slot: 'footer'
      }, [r('el-button', {
        on: {
          click: function (t) {
            e.show = !1
          }
        }
      }, [e._v('取 消')]), r('el-button', {
        attrs: { type: 'primary' },
        on: { click: e.onSubmit }
      }, [e._v('确 定')])], 1)], 1)], 1)
    }, z = []

    function F (e, t) {
      var r = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, n)
      }
      return r
    }

    function N (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {}
        t % 2 ? F(r, !0).forEach((function (t) {
          Object(i['a'])(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(r).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    var L = {
      data: function () {
        return { show: !1, handleClose: null, tokenForm: { token: '' } }
      }, computed: N({}, Object(c['b'])(['githubUsername'])), methods: {
        open: function (e) {
          this.handleClose = e, this.show = !0
        }, onSubmit: function () {
          var e = this
          this.$refs['tokenForm'].validate((function (t) {
            t && (e.$store.dispatch('Authentication', e.tokenForm.token), 'function' === typeof e.handleClose && e.handleClose())
          })), this.show = !1
        }
      }
    }, R = L, q = Object(p['a'])(R, A, z, !1, null, null, null), G = q.exports

    function H (e, t) {
      var r = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), r.push.apply(r, n)
      }
      return r
    }

    function W (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {}
        t % 2 ? H(r, !0).forEach((function (t) {
          Object(i['a'])(e, t, r[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(r).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }))
      }
      return e
    }

    var X = {
        name: 'Menu', components: { TokenDialog: G }, methods: {
          isLogin: function () {
            return !1
          }, insertToken: function () {
            this.$refs.tokenDialog.open()
          }
        }, computed: W({}, Object(c['b'])(['token']))
      }, J = X, K = (r('066e'), Object(p['a'])(J, I, M, !1, null, null, null)), B = K.exports,
      Q = { name: 'home', components: { Content: U, Menu: B } }, V = Q,
      Y = Object(p['a'])(V, h, v, !1, null, null, null), Z = Y.exports
    n['default'].use(d['a'])
    var ee = [{ path: '/', redirect: '/home' }, { path: '/home', name: 'home', component: Z }, {
      path: '/write',
      name: 'write',
      component: function () {
        return r.e('about').then(r.bind(null, 'ef4c'))
      }
    }], te = new d['a']({
      routes: ee, scrollBehavior: function (e, t, r) {
        if (e.meta.scrollTop) return { x: 0, y: 0 }
      }
    })
    te.beforeEach((function (e, t, r) {
      n['default'].prototype.$setTitle(e.meta.title), r()
    }))
    var re = te, ne = (r('99af'), r('c975'), r('bc3a')), oe = r.n(ne),
      ae = oe.a.create({ baseURL: 'https://api.github.com', timeout: 15e3 })
    ae.interceptors.request.use((function (e) {
      var t = ve.state.tokenStorage.token
      if (t) {
        var r = '?'
        e.url.indexOf('?') >= 0 && (r = '&'), e.url = e.url + r + 'access_token=' + t
      }
      return e
    }), (function (e) {
    })), ae.interceptors.response.use((function (e) {
      e.data
      return e
    }), (function (e) {
      var t
      switch (e.response.status) {
        case 401:
          t = 'Token错误'
          break
        default:
          t = e.response.data.message
          break
      }
      return n['default'].prototype.$message({ message: t, type: 'error' }), Promise.reject('error')
    }))
    var ie = ae, ce = {
      verifyToken: function (e) {
        return ie({ url: '/user?access_token=' + e })
      }, getInfo: function () {
        var e = ve.state.configuration.githubUsername
        return ie({ url: '/users/' + e })
      }, followers: function (e) {
        var t = ve.state.configuration.githubUsername
        return ie({ url: '/users/'.concat(t, '/followers?page=').concat(e.page, '&per_page=').concat(e.pageSize) })
      }, following: function (e) {
        var t = ve.state.configuration.githubUsername
        return ie({ url: '/users/'.concat(t, '/following?page=').concat(e.page, '&per_page=').concat(e.pageSize) })
      }, info: function (e) {
        return ie({ url: '/users/'.concat(e) })
      }
    }, se = {
      state: { token: '' }, mutations: {
        SET_TOKEN: function (e, t) {
          e.token = t
        }
      }, actions: {
        Authentication: function (e, t) {
          var r = e.commit
          ce.verifyToken(t).then((function (e) {
            var o = e.data, a = ve.state.configuration.githubUsername
            a == o['login'] ? (r('SET_TOKEN', t), n['default'].prototype.$notify({
              title: '成功',
              message: 'Token绑定成功',
              type: 'success'
            })) : n['default'].prototype.$message({ message: 'Token用户不一致', type: 'error' })
          })).catch((function () {
          }))
        }
      }
    }, ue = se, le = { state: { token: '' }, mutations: {}, actions: {}, modules: {} }, fe = le, pe = {
      state: { githubUsername: '', htmlTitle: '' }, mutations: {
        SET_CONFIGURATION: function (e, t) {
          e.githubUsername = t['githubUsername'] || 'GitHub-Laziji', e.htmlTitle = t['htmlTitle'] || ''.concat(e.githubUsername, '的博客')
        }
      }, actions: {
        LocalReload: function (e, t) {
          var r = e.commit
          r('SET_CONFIGURATION', t)
        }, Init: function (e) {
          var t, r = e.commit
          t = window.hasOwnProperty('XMLHttpRequest') ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP'), t.open('GET', 'static/configuration.json', !1), t.send()
          var n = JSON.parse(t.responseText)
          r('SET_CONFIGURATION', n)
        }
      }
    }, me = pe, be = {
      token: function (e) {
        return e.tokenStorage.token
      }, githubUsername: function (e) {
        return e.configuration.githubUsername
      }
    }, de = be
    n['default'].use(c['a'])
    var he = new c['a'].Store({ state: {}, modules: { tokenStorage: ue, user: fe, configuration: me }, getters: de }),
      ve = he, ge = r('5c96'), Oe = r.n(ge)
    r('0fae')
    n['default'].config.productionTip = !1, n['default'].prototype.$setTitle = function (e) {
    }, n['default'].use(Oe.a), new n['default']({
      router: re, store: ve, render: function (e) {
        return e(b)
      }
    }).$mount("#app")
  }
});

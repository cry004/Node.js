var express = require('express')
var app = express()

// 增加靜態檔案的路徑 public資料夾
app.use(express.static('public'))

var login = function (req, res, next) {
  var _url = req.url
  if (_url == '/') {
    next()
  } else {
    res.send('你的登入資料有錯！')
  }
  console.log('log in')
  // kk();  程式有問題時
  // next()
}
// app.use(login);  //單獨使用 midddleware
app.get('/', login, function (req, res) {
  // middleware 放在中間
  res.send('<h1>Home</h1><img src="/images/images.jpeg">') // image 放在 public 資料夾
})

app.use(function (req, res, next) {
  res.status(404).send('抱歉，您的頁面不存在')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('程式有問題，請稍候嘗試')
})
// app.get('/aaa/:name/', function (req, res) {
//   var name = req.params.name
//   var limit = req.query.limit
//   var q = req.query.q
//   console.log()
//   res.send(
//     '<h1>' + name + '想要找關鍵字叫做' + q + '的資料前' + limit + '筆</h1>'
//   )
// })

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('OK!')
})

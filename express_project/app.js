var express = require('express')
var app = express()
var engine = require('ejs-locals')
var bodyParser = require('body-parser')
var user = require('./routers/user') // user相關的路由集中在這檔案裡

app.engine('ejs', engine)
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/usee', user)  // 使用user相關的路由

app.get('/', function (req, res) {
  // res.send('<h1>Home</h1>');
  res.render('index', {
    title: 'Express test',
    Author: '<h1>Mark</h1>',
    show: false,
    course: ['html', 'css', 'php']
  })
})

app.get('/search', function (req, res) {
  res.render('search')
})
app.post('/searchList', function (req, res) {  // 傳統 submit表格 方法
  console.log(req.body)
  res.redirect('search')  // 重新導向
})
app.post('/searchAJAX', function (req, res) { // ajax方法, spg用
  console.log(req.body)
  res.send('hello')
  // res.redirect('search');
})

var port = process.env.PORT || 3000
app.listen(port)

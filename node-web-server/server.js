const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  //res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'AAA',
    like: [
      'Bike',
      'Cities'
    ]
  });
});

app.get('/about',(req, res) => {
  res.send('About page');
})

app.listen(8000, () => {
  console.log('server is fired on port 8000')
});

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 8000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);

  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('Error happened');
    }
  })
  next();
});

// app.use((req,res,next) => {
//   res.render('maintain.hbs');
//   //next();
// })

hbs.registerHelper('getcurrentYear', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text) => {
  return  text.toUpperCase();
})

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express</h1>');
  // res.send({
  //   name: 'AAA',
  //   like: [
  //     'Bike',
  //     'Cities'
  //   ]
  // });
  res.render('home.hbs',{
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to my website.'
  })
});

app.get('/about',(req, res) => {
  res.render('about.hbs',{
    pageTitle: 'About Page'
  });
})

app.get('/project', (req, res) => {
  res.render('project.hbs',{
    pageTitle: 'Project Page'
  });
})

app.listen(port, () => {
  console.log(`server is fired on port ${port}`)
});

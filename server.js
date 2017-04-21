var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./server/config/routes.js')(app)

app.listen(8000,function(){
  console.log('PEAR!!!! Listening to port 8000');
})

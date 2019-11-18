var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist/pay9-admin-app')));

app.use(express.static('dist', { index: '/index.html' }));
// qa 3002, uat 3004
app.listen(3002);

app.use(function (req, res, next) {
   console.log(req.url);

   if (/^\/v1.0\//.test(req.url)) {
       next();
   } else { 
       console.log('index');
      res.sendFile(__dirname + '/dist/pay9-admin-app/index.html');
   }
});
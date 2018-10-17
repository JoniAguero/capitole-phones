'use strict'

var app = require('./app');
var port = process.env.PORT || 1234;

app.listen(port, function () {
  console.log("Servidor API en puerto: " + port);
})


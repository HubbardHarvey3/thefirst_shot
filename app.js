var express = require('express')
var app = express()
var compression = require('compression');

app.set('port', (process.env.PORT || 5000))
app.use(compression());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

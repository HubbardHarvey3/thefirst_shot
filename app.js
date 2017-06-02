var express = require('express')
var app = express()
var compression = require('compression');

app.use(compression());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Blog server is spinning up");
});
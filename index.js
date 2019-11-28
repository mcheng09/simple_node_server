var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + "/public"));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.get('/', function(req,res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, function() {
  console.log('Server is running on port:', port);
});

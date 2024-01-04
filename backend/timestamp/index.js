// index.js
// where your node app starts
require('dotenv').config();
// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/:date?', (req, res) => {
  const date = !req.params.date? new Date() : (!isNaN(req.params.date)? new Date(Number(req.params.date)) : new Date(req.params.date));
  const obj = date.toString() === 'Invalid Date'? {error: date.toString()} : {unix: date.getTime(), utc: date.toUTCString()} ;
  
  res.json(obj);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

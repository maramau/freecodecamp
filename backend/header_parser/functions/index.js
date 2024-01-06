// Firebase stuff
const functions = require('firebase-functions');

// init project
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');

app.use(
    cors({
      origin: ["http://localhost:3000", 'http://127.0.0.1:5000', 'https:freecodecamp.org', '162.158.158.56'],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
      optionsSuccessStatus: 200
    })
);  // some legacy browsers choke on 204
  
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", function (req, res) {
  console.log(req.host)
  console.log(req.ip)
  const obj = {
    ipaddress: req.ip || req.host.split(':')[0],
    language: req.header('accept-language'),
    software: req.get('user-agent'),
  };
  console.log(obj)
  res.json(obj);
});

exports.app = functions.https.onRequest(app);
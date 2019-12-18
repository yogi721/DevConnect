const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const sharks = require(__dirname +'/SharksModule/routes/sharks');

const path = __dirname + '/views/';
const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/sharks', sharks);
app.use('/api', require(__dirname +'/SharksModule/routes/api'));

app.listen(port, function () {
  console.log(`Example app listening on ${port}!`);
});

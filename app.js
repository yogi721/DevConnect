const express = require('express');
const db = require('./config/db');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const port = process.env.PORT || 8081;


app.listen(port, () => {
  console.log(`Example app listening on ${port}!`);
});

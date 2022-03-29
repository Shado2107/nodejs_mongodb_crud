const express = require('express');
const app = express();
require('./models/dbConfig');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');

app.use('/', postsRoutes);

app.use(bodyParser.json());

app.listen(5500, () => console.log('Server started: 5500'));
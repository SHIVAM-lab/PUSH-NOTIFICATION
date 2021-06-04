var app = require('http');
app.createServer().listen(3000);


require('mongoose').connect('mongodb://localhost/tattletale' ,{useNewUrlParser: true,
useUnifiedTopology: true});
require('dotenv').config();


var app = require('./routes/index');
require('mongoose').connect('mongodb://localhost/tattletale' ,{useNewUrlParser: true,
useUnifiedTopology: true});
require('dotenv').config();
var port = 3000;
app.listen(port, console.log(`Server is running on ${port}`));

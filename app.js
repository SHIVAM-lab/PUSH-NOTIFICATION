 var app;
 app.use()
require('mongoose').connect('mongodb://localhost/tattletale');
require('dotenv').config();

const port = process.env.PORT||3000;
app.listen(port,console.log(`server is running on ${port}`));
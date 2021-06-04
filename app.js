const app = express();
app.use(bodyParser.json());
require('mongoose').connect('mongodb://localhost/tattletale');
require('dotenv').config();

const port = process.env.PORT||3000;
app.listen(port,console.log(`server is running on ${port}`));
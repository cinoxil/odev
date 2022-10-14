const express = require('express');
const cors = require('cors');
const { postMw, helloMw } = require('./middlewares/helloMiddleware');
const app = express();
const routes = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
	console.log('Server 3000 portunda calisiyor');
});

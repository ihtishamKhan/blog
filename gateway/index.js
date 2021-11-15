const express = require('express');
require('dotenv').config()
const cors = require('cors');
const proxy = require('express-http-proxy');
const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());

app.use('/api/posts', proxy('http://127.0.0.1:8001'));
app.use('/comments', proxy('http://127.0.0.1:8002'));


app.listen(PORT, () => {
    console.log(`Gateway is listening to ${PORT}`);
})
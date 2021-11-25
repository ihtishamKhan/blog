const express = require('express');
require('dotenv').config()
const cors = require('cors');
const proxy = require('express-http-proxy');
const app = express();
// const { PORT } = process.env;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({ "msg": "Hello form Gateway" });
});

app.get('/test-link', (req, res) => {
    return res.status(200).json({ "msg": "Hello form deploy test" });
});

app.use('/api/posts', proxy('http://127.0.0.1:8001'));
app.use('/api/comments', proxy('http://127.0.0.1:8002'));



var server = app.listen(8000, () => {
    console.log(`Gateway is listening to 8000`);
})


module.exports = server
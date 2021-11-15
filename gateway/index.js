const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/posts', proxy('http://127.0.0.1:8001'));
app.use('/comments', proxy('http://127.0.0.1:8002'));

app.listen(port, () => {
    console.log(`Gateway is listening to ${port}`);
})
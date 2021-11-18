const express = require('express');

const app = express();
const port = process.env.PORT || 8002;


app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
app.use(express.json({ extended: false, limit: '50mb' }));

app.get('/test', (req, res) => {
    res.send({ "msg": "Hello from test of coments" });
})

app.listen(port, () => {
    console.log(`Posts is listening to ${port}`);
})
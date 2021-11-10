const express = require('express');

const app = express();
const port = process.env.PORT;

app.use('/', (req, res) => {
    return res.status(200).json({ "msg": "Hello form Posts" });
})

app.listen(port, () => {
    console.log(`Posts is listening to ${port}`);
})
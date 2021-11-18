const express = require('express');

const app = express();
const port = process.env.PORT;


app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
app.use(express.json({ extended: false, limit: '50mb' }));



app.get('/', (req, res) => {
    return res.status(200).json({ "msg": "Hello form Posts" });
});

require('./server/routes')(app);
app.listen(port, () => {
    console.log(`Posts is listening to ${port}`);
})
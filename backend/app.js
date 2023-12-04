const express = require('express');
const authRouter = require('./router/authRoute')

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);

app.use('/', (req, res) => {

    res.status(200).json({
        data: "JWTAuth server"
    });
});

module.exports = app;

const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

const app = express();

dbConnection();

//Allow requests from all origins
app.use(cors());

const port = process.env.PORT;

app.use(express.static('public'));

app.use(express.json());

app.use("/api/auth", require('./routes/auth.router'));
app.use("/api/events", require('./routes/events.router'));

app.listen(port, () => {
    console.log(`Calendar app server listening on port ${port}`);
});
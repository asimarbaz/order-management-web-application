const express = require('express');
const configureDb = require('./config/database');
const app = express();
const cors = require('cors');
const router = require('./config/routes');
require('dotenv').config();

app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(router)

const port = 3040
configureDb()

app.listen(port, () => {
    console.log('server running on port', port)
})




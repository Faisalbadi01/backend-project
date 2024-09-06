
const express = require('express')
const connection = require('./config/db')
const cors = require('cors')
const user = require('./model/schema')
const { reg } = require('./controller/authController')

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.use('/', require('./routes/routes'))



app.listen(port, () => {
    console.log("app port :", port)

    connection();
})
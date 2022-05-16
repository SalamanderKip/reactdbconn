const express = require('express')
const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())
app.use('/', router)

const mysql = require('mysql')
var connection = mysql.createConnection({
    host: process.env.MYSQL_DATABASE_HOST,
    user: process.env.MYSQL_DATABASE_USER,
    password: process.env.MYSQL_DATABASE_PASS,
    database: process.env.MYSQL_DATABASE_NAME
})

app.get('/api/projects', function (req, res) {
    connection.query("SELECT * FROM projecten", function (err, results, fields) {
        if (err) return console.error(err)
        console.log(results)
        res.send(results).status(200)
    })
})


app.listen(3000)
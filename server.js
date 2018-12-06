const express = require('express')
const app = express()
const basic = require('express-basic-auth')
const bodyParser = require('body-parser')

app.use(basic({
users: {'admin': 'supersecret'}
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/onload', (req, res) => {
    res.json('hello world')
})

app.get('', (req,res)=> {
    res.sendFile(path.join(__dirname+ '/index.html'))
})

const port = 8080
app.listen(port)
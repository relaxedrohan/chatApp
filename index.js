const express = require('express')
const path = require('path')
const http = require('http')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 5000

const publicDir = path.join(__dirname, './public' )

app.use(express.static(publicDir))

server.listen(port, ()=>{
    console.log(`server is up on port ${port}`)
})

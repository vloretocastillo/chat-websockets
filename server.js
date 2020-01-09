const http = require('http')

const express = require('express')
const app = express()
const server = http.createServer(app)
const io = require('socket.io').listen(server)

// use websockets
io.on('connection', (socket)=> {
    console.log('client on connection')
})

// static files
app.use(express.static('client'))

// Starting the server
server.listen(3000, ()=> {
    console.log('Server on port 3000...')
})



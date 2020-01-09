const http = require('http')
const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const server = http.createServer(app)
const io = require('socket.io').listen(server)

// use websockets
// io.on('connection', (socket)=> {
//     console.log('client on connection')
// })

require('./sockets/sockets')(io)

// static files
            // What we would do if we put the client folder inside another folder, for instance
            // const path = require('path')
            // path.join(__dirname, 'client') 
            // app.use(express.static(path.join(__dirname, 'client'))) OR app.use(express.static(__dirname + 'src/client'))
app.use(express.static('client'))

// Starting the server
server.listen(port, ()=> {
    console.log(`Server on port ${port}...`)
})



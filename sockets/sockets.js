// const io = require('socket.io').listen(server)

module.exports = (io) => {

    io.on('connection', (socket)=> {
        console.log('client on connection')
    })

}


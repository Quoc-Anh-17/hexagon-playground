const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', socket => {
    socket.on('drawing', (data) => socket.broadcast.emit('drawing', data))
})

http.listen(port, () => console.log('listening on port 3000'))

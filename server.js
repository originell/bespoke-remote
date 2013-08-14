var fs = require('fs'),
    http = require('http'),
    path = require('path'),
    express = require('express'),
    io = require('socket.io'),
    app = express()

// Initialise Express.
app.use(express.favicon())
app.use(express.logger('dev'))
// Set this to the directory where you keep all your assets (images, css,...)
app.use('/static', express.static(path.join(__dirname, 'static')))

server = http.createServer(app)
server.listen(8000, '0.0.0.0', function() {
    console.log('Listening on all interfaces. http://localhost:8000/')
})

// SocketIO setup.
io = io.listen(server)
// Turn on minification, cache and gzipping of socketio client js to reduce
// the remote's load time. Helps initial load on slower wifis.
io.set('browser client minification', true)
io.set('browser client cache', true)
io.set('browser client gzip', true)


io.sockets.on('connection', function(socket) {
    socket.emit('established')

    // Broadcast "nextSlide" across all connected sockets. This makes it
    // possible to switch slides simultaniously across all connected viewers.
    socket.on('nextSlide', function(data, ack) {
        io.sockets.emit('nextSlide')
    })
    socket.on('prevSlide', function(data, ack) {
        io.sockets.emit('prevSlide')
    })
})

// Setup for the HTTP Server.
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html')
    res.sendfile(path.join(__dirname, 'presentation.html'))
})
app.get('/remote', function(req, res) {
    res.setHeader('Content-Type', 'text/html')
    res.sendfile(path.join(__dirname, 'remote.html'))
})

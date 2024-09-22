// socket.js
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('joinPage', (pageId) => {
    socket.join(pageId);
  });

  socket.on('updatePage', (pageId, content) => {
    io.to(pageId).emit('updatePage', content);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
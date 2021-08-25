const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
var user=0;
var flag=0;
var name=[];
var i=0;
io.on('connection', (socket) => {

    i=i+1;
    user=user+1;
     console.log(`Total user Connected ${user}`);
     socket.on('disconnect', () => {
     user=user-1;
    console.log(`Total user Connected ${user}`);});
    socket.on('user name',(value) => 
    {
        name[i]=value;

    });
    socket.on('chat message', (msg) => { 
            io.emit('chat message', name[i]+':'+ msg); 
            io.emit('active', user);    
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});

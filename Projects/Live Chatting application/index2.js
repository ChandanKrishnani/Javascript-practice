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
var i=1;
io.on('connection', (socket) => {

 
    user=user+1;
    io.emit('active', user);    
     console.log(`Total user Connected ${user}`);
     socket.on('disconnect', () => {
     user=user-1;
    console.log(`Total user Connected ${user}`);});
    socket.on('user name',(value) => 
    {
      let j=0;
      let flag=0;
      while(j<i)
      {
        if(value==name[j])
        {
          flag=1;
          break;
        }
        j++;
      }
      if(flag==0)
      {
        io.emit('Active users', value);    
        name[i]=value;
        i=i+1;
      }
    });
    
    socket.on('chat message', (msg) => { 
            io.emit('chat message', name[i-1]+':'+ msg); 
            io.emit('active', user);    
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});

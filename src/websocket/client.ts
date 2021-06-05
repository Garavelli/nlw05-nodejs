import { Socket } from 'socket.io';
import { io } from '../http';
import { ConnectionsService } from '../services/ConnectionsService';
import { UsersService } from '../services/UserService';
import { MessagesService } from '../services/MessagesService';

io.on("connect", (socket: Socket) => {  
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  console.log("Connected as: ", socket.id);
  socket.on("client_first_access", async(params) => {
    const socket_id = socket.id;
    const { text, email} = params;

    console.log(params);

    let user = await usersService.findByEmail(email);

    if(!user) {
      user = await usersService.create(email);
    };

    await messagesService.create({ text, user_id: user.id})

    const connection = await connectionsService.findByUserID(user.id);    
    
    if (connection) {
      await connectionsService.create(connection);
      return;
    }
    await connectionsService.create({
      socket_id,
      user_id: user.id
    });
    
    
  });  
});
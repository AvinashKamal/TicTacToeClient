import { Socket } from 'socket.io-client';
class GameService {
    public async createGameRoom(socket: Socket, roomId: string, playerName: string): Promise<boolean> {
          
        return new Promise((resolve, reject) => {
            socket.emit('create_game', { roomId, playerName })
            this.joinGameRoom(socket, roomId, playerName)
          // Check if playerName exists in any of the rooms
          // Check for number of rooms (IF greater than 10 end the socket connection
          // else connect player to room)
        })
        
            
    }
    public async joinGameRoom(socket: Socket, roomId: string, playerName: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            socket.emit('join_game', {roomId, playerName})
        })
    }
}
import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/cjs'

class socketService {

    public socket: Socket | null = null

    public connect(url: string) : Promise<Socket<DefaultEventsMap, DefaultEventsMap>> {
        return new Promise((resolve, reject) => {
            this.socket = io(url)
            
            if(!this.socket) {
                return reject()
            }

            this.socket.on("connect", () => {
                resolve(this.socket as Socket)
            })

            this.socket.on("connect_error", (err) => {
                console.log("Connection error: ", err);
                reject(err)                
            })
        })
    }

    public disconnect(url: string) : Promise<Socket<DefaultEventsMap, DefaultEventsMap>> {
        return new Promise((resolve, reject) => {
            this.socket = io(url)
            
            if(!this.socket) {
                return reject()
            }

            this.socket.on("disconnect", () => {
                resolve(this.socket as Socket)
            })
        })
    }
}

export default new socketService();
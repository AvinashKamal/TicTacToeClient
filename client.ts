import socketService from './services/socketService'

const connectSocket = async () => {
    const socket = await socketService.connect("http://localhost:9000").catch(err => {
        console.log("Error ", err);  
    })
}

connectSocket()

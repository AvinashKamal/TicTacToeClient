import socketService from './services/socketService'
import { createInterface } from 'readline';
import { stdin, stdout } from 'process';
import { v4 as uuidv4 } from 'uuid'

let playerName: string = "";
let port: string = ""

const connectSocket = async () => {
    await socketService.connect("http://localhost:9000").catch(err => {
        console.log("Error ", err);  
    })
}

const main = () => {
    const rdLine = createInterface({
        input: stdin,
        output: stdout
    })
    connectSocket().then(() => {
        console.log(`Connected to the server. What would you like to do ${playerName} (Choose an option) :`)
        rdLine.setPrompt("\t1. Create a new game.\n\t2.Join a game\n\t3. Spectate a game\n");
        rdLine.prompt();
        rdLine.on('line', (answer) => {
            // console.log(`You have selected ${answer}`);
            
            switch(answer) {
                case "1":
                    //CREATE NEW GAME FOR PLAYER
                    let roomId: string = ""
                    roomId = uuidv4();
                    roomId = roomId.split('-')[0]
                    console.log("Creating a new game with ID:",roomId,".");        
            }
            
            
        })
    }).catch(err => {
        console.error("Couldn\`t connect ", err);
        socketService.disconnect("http://localhost:9000").catch(err => {
            console.error("Error while disconnection ", err);
            
        })        
    })
} 
main();



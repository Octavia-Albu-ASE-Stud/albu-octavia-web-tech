import { EventEmitter } from 'fbemitter'
import Axios from 'axios'

const SERVER = 'http://localhost:3000'

class DBStore {
    constructor() {
        this.data = [];
        this.axios = Axios.create();
        this.emitter = new EventEmitter();
    }

    async getAstronauts() {


        this.axios.get("/api/astronauts").then((response) => {
            this.data = response.data;
            console.log(this.data)
            this.emitter.emit("GET_ASTRONAUTS_SUCCESS");
        }).catch((error) => {
            console.warn(error)
            this.emitter.emit("GET_ASTRONAUTS_FAILED");
        })
    }

    async getSpace() {
        try{
             const response = await fetch("/api/spacecrafts");
 
             if(response.status === 500) {
                 throw response;
             }
 
             this.data = await response.json();
             this.emitter.emit("GET_S_SUCCESS");
         } catch (error) {
             console.warn(error)
             this.emitter.emit("GET_S_FAILED");
         }
    }

    async addAstronaut(astronaut) {
        try {
            const response = await fetch(`${SERVER}/api/astronauts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(astronaut)
            })
            if (!response.ok) {
                throw response
            }
            this.getAstronauts()
        } catch (err) {
            console.warn(err)
            this.emitter.emit('ADD_ASTRONAUTS_ERROR')
        }
    }

    async addSpacecraft(spacecraft) {
        try {
            const response = await fetch(`${SERVER}/api/spacecrafts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(spacecraft)
            })
            if (!response.ok) {
                throw response
            }
            this.getSpace()
        } catch (err) {
            console.warn(err)
            this.emitter.emit('ADD_S_ERROR')
        }
    }

}

const store = new DBStore();

export default store;
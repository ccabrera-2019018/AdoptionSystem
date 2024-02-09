import express  from "express";
import { deleteP, registerP, searchPet, showPets, updateP } from "./animal.controller.js";


const api = express.Router()

api.get('/showPets', showPets)
api.post('/registerPet', registerP)
api.put('/updatePet/:id', updateP)
api.delete('/deletePet/:id', deleteP)
api.get('/searchPet/:name', searchPet)

export default api
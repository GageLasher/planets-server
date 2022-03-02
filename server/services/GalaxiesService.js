import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class GalaxiesService{
    async getAll(query = {}){
        const galaxies = await dbContext.Galaxies.find(query).populate('creator', 'name picture')
        return galaxies
    }
    async getById(id){
        const galaxy = await dbContext.Galaxies.findById(id)
        if(!galaxy){
            throw new Forbidden("there is no galaxy under this id")
        }
        return galaxy
    }
    async create(body){
        const galaxy = await dbContext.Galaxies.create(body)
        return galaxy
    }
}


export const galaxiesService = new GalaxiesService()
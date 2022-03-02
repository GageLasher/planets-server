import { dbContext } from "../db/DbContext"

class PlanetsService{
    async getAll(query = {}){
        const planets = await dbContext.Planets.find(query)
        return planets
    }
    async create(body){
        const planet = await dbContext.Planets.create(body)
        return planet
    }
}

export const planetsService = new PlanetsService()
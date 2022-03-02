import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController{
    constructor(){
        super('api/galaxies')
        this.router
        .get('', this.getAll)
        .get('/:id', this.getById)
        .get('/:id/stars', this.getGalaxyStars)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.create)
    }
    async getAll(req, res, next){
        try {
            const galaxies = await galaxiesService.getAll(req.query)
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next){
        try {
            const galaxy = await galaxiesService.getById(req.params.id)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
    async getGalaxyStars(req, res, next){
        try {
            const stars = await starsService.getAll({galaxyId: req.params.id})
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next){
        try {
            req.body.creatorId = req.userInfo.id
            const galaxy = await galaxiesService.create(req.body)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}
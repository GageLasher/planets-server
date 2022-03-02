import { Auth0Provider } from "@bcwdev/auth0provider";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController{
    constructor(){
        super('api/stars')
        this.router
        .get('', this.getAll)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.create)

    }
    async getAll(req, res, next){
        try {
            const stars = await starsService.getAll(req.query)
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next){
        try {
            req.body.creatorId = req.userInfo.id
            const star = await starsService.create(req.body)
            return res.send(star)
        } catch (error) {
            next(error)
        }
    }
}
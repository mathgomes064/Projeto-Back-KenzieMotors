import {Request, Response} from "express"
import { AppError, handleError } from "../../errors/appErro"
import { IUserJwt } from "../../interfaces/user";
import { commentCreateService} from "../../services/comments/createComment.service"
import { createSessionService, getUserInfo } from "../../services/session/createSession.service";
import listUserByEmailService from "../../services/user/listUserByEmail.service";
import vehicleListByIdService from "../../services/vehicle/vehicleListById.service";

export const commentCreateController = async(req: Request, res: Response) =>{
    //return res.status(201).json(JSON.stringify(req.headers.authorization));
    const token = req.headers.authorization;
    let user = undefined
    if (token != undefined){
        const userInfo = await getUserInfo({token}) as IUserJwt;
        user = await listUserByEmailService(userInfo['email']);
        try {
            const description = req.body['description']
            console.log(1111111111111111)
            console.log(req.body['vehicle_id'])
            const vehicle = await vehicleListByIdService(req.body['vehicle_id']);
            console.log(vehicle)
            console.log(1111111111111111)
            const createComment = await commentCreateService({description, user, vehicle})
            return res.status(201).json({createComment});
        } catch (err) {
            if(err instanceof AppError){
                handleError(err, res)
            }
        } 
    }
    return res.status(400).json({"msg": "Erro ao processar requisição."});
}
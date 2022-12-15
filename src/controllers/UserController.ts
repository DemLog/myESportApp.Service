import {Request, Response, NextFunction} from 'express';
import {apiErrorHandler} from './../handlers/errorHandler';

export default class UserController {
    constructor() {
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            res.json({
                "test": 1
            })
        } catch (err) {
            apiErrorHandler(err, req, res, 'Ошибка при получение всех пользователей');
        }
    }
}
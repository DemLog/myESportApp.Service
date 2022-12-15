import {Router} from 'express';
import UserController from '../controllers/UserController';

class UserRoutes {
    router = Router();
    userController = new UserController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(this.userController.getAllUsers);
    }
}

export default new UserRoutes().router;
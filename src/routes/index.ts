import {Application} from 'express';
import userRouter from './UserRouter';

export default class Routes {
    constructor(app: Application) {
        app.use('/api/users', userRouter);
    }
}

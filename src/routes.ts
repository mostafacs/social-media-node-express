
import profileRoutes from './profile/routes'
import {Express} from "express";

export default (app: Express) => {
    app.use('/profile', profileRoutes);
}